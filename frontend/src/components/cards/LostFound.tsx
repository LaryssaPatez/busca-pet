import { IoStar } from 'react-icons/io5';
import { LostFoundCardProps } from '../../utils/types';
import { CardContainer, CardContent } from './LostFound.style';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { getUserFromToken } from '../../utils/auth';
import axios from 'axios';
import { API_URL } from '../../utils/constants';

export default function LostFound({ name, creator, location, status, imageUrl, idPost }: LostFoundCardProps) {
    const { authData } = useContext(AuthContext);
    const user = authData.token ? getUserFromToken(authData.token) : null;
    const username = user ? user.username.sub : '';

    const handleDelete = async () => {
        try {
            if (username !== creator) return;

            const confirmed = window.confirm('Você tem certeza de que deseja deletar essa postagem?');
            if (!confirmed) return;

            await axios.delete(`${API_URL}/post/${idPost}`, {
                headers: {
                    Authorization: `Bearer ${authData.token}`,
                },
            });

            alert('Post deleted successfully');
        } catch (error) {
            console.error('Falha ao deletar a postagem:', error);
            alert('Falha ao deletar a postagem');
        }
    };

    return (
        <CardContainer>
            <h2>{status}</h2>
            <div className="image-container">
                <img src={imageUrl} alt="avatar" />
            </div>
            <CardContent>
                <div>
                    <h3>{name}</h3>
                    <IoStar />
                </div>
                <div>
                    <p>Localização: {location}</p>
                    {creator === username && (
                        <>
                            <MdModeEdit onClick={() => console.log(idPost)} />
                            <MdDeleteForever onClick={handleDelete} />
                        </>
                    )}
                </div>
            </CardContent>
        </CardContainer>
    )
}