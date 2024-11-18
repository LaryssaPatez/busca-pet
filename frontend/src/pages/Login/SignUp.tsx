import { useState } from 'react';
import { PageWrapper } from "./SignUp.style";
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/auth/cadastro`, { login, password, role:'USER'});
            if (response.status === 200) {
                alert('Conta criada com sucesso!');
                navigate("/");
            } else {
                alert('Erro ao criar conta. Tente novamente mais tarde.');
            }
        } catch (error) {
            console.error('Erro ao criar conta:', error);
            alert('Erro ao criar conta. Tente novamente mais tarde.');
        }
    };

    return (
        <PageWrapper>
            <img src="/register_dog.jpg" alt="Cachorro bege" />
            <form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                <label htmlFor="input-login">
                    Usuário *
                    <input type="text" placeholder="Username" id="input-login" required value={login} onChange={(e) => setLogin(e.target.value)} />
                </label>
                <label htmlFor="input-password">
                    Senha *
                    <input type="password" placeholder="******" id="input-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </PageWrapper>
    );
}