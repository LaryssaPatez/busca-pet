import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginModalProps } from '../../utils/types';
import {
	CloseButton, ForgotPasswordLink, FormContainer, FormInput,
	ModalContent, ModalHeader, ModalOverlay, RememberMeContainer,
	SignUpButton, StyledCheckbox, SubmitButton
} from './Login.style';
import { AuthContext } from '../../context/AuthContext';
import { API_URL } from '../../utils/constants';
import axios from 'axios';

const Login = ({ closeModal }: LoginModalProps) => {
	const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const { authData, setAuthData } = useContext(AuthContext);

	const handleOverlayClick = () => closeModal();
	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

	const toggleToPasswordRecovery = () => setIsPasswordRecovery(true);
	const toggleToLogin = () => setIsPasswordRecovery(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (authData.token) {
			localStorage.setItem('token', authData.token);
		} else {
			localStorage.removeItem('token');
		}
	}, [authData.token]);

	const handleButtonClick = async (event: any) => {
		event.preventDefault();
		navigate('/auth/cadastrar');
	};

	const handleLoginSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await axios.post(`${API_URL}/auth/login`, { login, password });
			if (response.status == 200) {
				setAuthData({ token: response.data.token });
				localStorage.setItem('token', response.data.token); // Store JWT token in local storage
			} else {
				alert('Login failed. Please check your credentials.');
			}
		} catch (error) {
			console.error('Login error:', error);
			alert('An error occurred during login. Please try again.');
		}
	};

	const handleRecoverySubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!login) {
			alert('Por favor, preencha o usuário ou o email');
			return;
		}
		alert("TODO - Endpoint the recuperação de senha.");
	};

	const renderLoginForm = () => (
		<>
			<h2>Login</h2>
			<FormContainer onSubmit={handleLoginSubmit}>
				<FormInput type="text" placeholder="Usuário" required value={login} onChange={(e) => setLogin(e.target.value)} />
				<FormInput type="password" placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)} />
				<RememberMeContainer>
					<StyledCheckbox type="checkbox" id="rememberMe" />
					<label htmlFor="rememberMe">Lembrar-me</label>
				</RememberMeContainer>
				<SignUpButton onClick={handleButtonClick}>Não tenho cadastro</SignUpButton>
				<SubmitButton type="submit">Entrar</SubmitButton>
			</FormContainer>
			<ForgotPasswordLink onClick={toggleToPasswordRecovery}>
				Esqueceu sua senha?
			</ForgotPasswordLink>
		</>
	);

	// Password recovery form content
	const renderPasswordRecoveryForm = () => (
		<>
			<h2>Recuperar senha</h2>
			<FormContainer onSubmit={handleRecoverySubmit}>
				<FormInput
					type="text"
					placeholder="Usuário"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<SubmitButton type="submit">Recuperar</SubmitButton>
			</FormContainer>
			<ForgotPasswordLink onClick={toggleToLogin}>
				Voltar para login
			</ForgotPasswordLink>
		</>
	);

	return (
		<ModalOverlay onClick={handleOverlayClick}>
			<ModalContent onClick={stopPropagation}>
				<CloseButton onClick={closeModal}>&times;</CloseButton>
				<ModalHeader>
					<img src="dog_login.png" alt="Cachorro feliz" />
				</ModalHeader>
				{isPasswordRecovery ? renderPasswordRecoveryForm() : renderLoginForm()}
			</ModalContent>
		</ModalOverlay>
	);
};

export default Login;
