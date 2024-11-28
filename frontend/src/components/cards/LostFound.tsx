import { IoStar } from 'react-icons/io5';
import { LostFoundCardProps } from '../../utils/types';
import { CardContainer, CardContent } from './LostFound.style';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';
import { getUserFromToken } from '../../utils/auth';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

export default function LostFound({ name, creator, location, status, imageUrl, idPost }: LostFoundCardProps) {
    const { authData } = useContext(AuthContext);
    const user = authData.token ? getUserFromToken(authData.token) : null;
    const username = user ? user.username.sub : '';
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedStatus, setEditedStatus] = useState(status);
    const [editedCity, setEditedCity] = useState(location.split("/")[0]);
    const [editedState, setEditedState] = useState(location.split("/")[1]);

    const handleDelete = async () => {
        if (username !== creator) return;

        const confirmed = window.confirm('Você tem certeza de que deseja deletar essa postagem?');
        if (!confirmed) return;

        try {
            await axios.delete(`${API_URL}/post/${idPost}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`,
                },
            });

            alert('Postagem deletada com sucesso.');
            navigate(0);
        } catch (error) {
            console.error('Falha ao deletar a postagem:', error);
            alert('Falha ao deletar a postagem');
        }
    };

    const handleEdit = () => {
        if (username !== creator) return;
        setEditMode(true);
    };

    const handleSave = async () => {
        try {
            await axios.patch(`${API_URL}/post/${idPost}`, {
                petName: editedName,
                city: editedCity,
                state: editedState,
                status: editedStatus === 'encontrado' ? 'encontrado' : 'perdido',
            }, {
                headers: {
                    Authorization: `Bearer ${authData.token}`,
                },
            });

            setEditMode(false);
            navigate(0);
        } catch (error) {
            console.error('Falha ao editar a postagem:', error);
            alert('Falha ao editar a postagem');
        }
    };

    return (
        <CardContainer>
            <h2>{status === 'encontrado' ? 'Encontrado' : 'Perdido'}</h2>
            <div className="image-container">
                <img src={imageUrl} alt="avatar" />
            </div>
            <CardContent>
                {editMode ? (
                    <form>
                        <label htmlFor="name">Nome:&nbsp;
                            <input type="text" id="name" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                        </label>
                        <label htmlFor="city">Cidade:&nbsp;
                            <input type="text" id="city" value={editedCity} onChange={(e) => setEditedCity(e.target.value)} />
                        </label>
                        <label htmlFor="state">Estado:&nbsp;
                            <input type="text" id="state" value={editedState} onChange={(e) => setEditedState(e.target.value)} />
                        </label>
                        <label htmlFor="status">Status:&nbsp;
                            <select id="status" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)}>
                                <option value="encontrado" selected={editedStatus === 'encontrado'}>Encontrado</option>
                                <option value="perdido" selected={editedStatus === 'perdido'}>Perdido</option>
                            </select>
                        </label>
                        <button type="button" onClick={() => setEditMode(false)}>Cancelar</button>
                        <button type="button" onClick={handleSave}>Salvar</button>
                    </form>
                ) : (
                    <span>
                        <div>
                            <h3>{name}</h3>
                            <IoStar />
                        </div>
                        <div>
                            <p>{location}</p>
                            {creator === username && (
                                <span>
                                    <MdModeEdit onClick={handleEdit} />
                                    <MdDeleteForever onClick={handleDelete} />
                                </span>
                            )}
                        </div>
                    </span>
                )}
            </CardContent>
        </CardContainer>
    )
}