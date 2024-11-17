import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginModalProps } from '../../utils/types';
import { CloseButton, ForgotPasswordLink, FormContainer, FormInput,
	 	 ModalContent, ModalHeader, ModalOverlay, RememberMeContainer,
	     SignUpButton, StyledCheckbox, SubmitButton
		} from './Login.style';

const Login = ({ closeModal }: LoginModalProps) => {
	const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	const handleOverlayClick = () => closeModal();
	const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

	const toggleToPasswordRecovery = () => setIsPasswordRecovery(true);
	const toggleToLogin = () => setIsPasswordRecovery(false);

	const navigate = useNavigate();

	const handleButtonClick = (event: any) => {
		event.preventDefault(); // Previne o comportamento padrão do formulário
		navigate('/auth/register'); // Substitua '/nova-rota' pela rota para onde deseja navegar
	};

	const handleRecoverySubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (!username && !email) {
			alert('Por favor, preencha o usuário ou o email');
			return;
		}
		alert("TODO - Endpoint the recuperação de senha.");
	};

	const renderLoginForm = () => (
		<>
			<h2>Login</h2>
			<FormContainer>
				<FormInput type="text" placeholder="Usuário" required />
				<FormInput type="password" placeholder="Senha" required />
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
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<span>OU</span>
				<FormInput 
					type="email" 
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
