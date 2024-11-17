import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

export const ModalContent = styled.div`
	background-color: ${theme.colors.secondary};
	color: white;
	max-height: 40rem;
	max-width: 25rem;
	width: 100%;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3rem 1.5rem;
	text-align: center;
	position: relative;

	h2 {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 1rem 0;
	}
`;

export const ModalHeader = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;

	img {
		width: 7.5rem;
		height: 7.5rem;
		border-radius: 50%;
		border: 0.15rem solid white;
		object-fit: cover;
	}
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 0.5rem;
	right: 1.5rem;
	background: none;
	border: none;
	font-size: 2rem;
	color: white;
	cursor: pointer;
`;

export const FormInput = styled.input`
	padding: 0.75rem;
	background-color: #f9f9f9;
	border: 1px solid #e6e6e6;
	border-radius: 0.5rem;
	font-size: 1rem;
	font-weight: 400;
	color: black;
	transition: border-color 0.3s ease;
	border: 2px solid ${theme.colors.secondary};

	&:focus {
		border: 2px solid ${theme.colors.primary};
		outline: none;
	}
`;

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	margin-top: 0.5rem;
`;

export const RememberMeContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StyledCheckbox = styled.input`
	appearance: none;
	margin: 0;
	font: inherit;
	color: ${theme.colors.secondary};
	width: 1.25rem;
	height: 1.25rem;
	border: 0.15rem solid ${theme.colors.secondary};
	background-color: white;
	border-radius: 0.25rem;
	display: grid;
	place-content: center;
	cursor: pointer;

	&:checked {
		background-color: ${theme.colors.primary};
	}

	&:checked::before {
		content: "✓";
		font-size: 1rem;
		color: white;
	}
`;

export const SignUpButton = styled.button`
	background-color: ${theme.colors.primary};
	color: white;
	font-size: 1.25rem;
	font-weight: 600;
	padding: 0.75rem 1.5rem;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	margin-top: 0rem;
`;

export const SubmitButton = styled.button`
	background-color: ${theme.colors.primary};
	color: white;
	font-size: 1.25rem;
	font-weight: 600;
	padding: 0.75rem 1.5rem;
	border: none;
	border-radius: 0.5rem;
	cursor: pointer;
	margin-top: 0rem;
`;


export const ForgotPasswordLink = styled.a`
	color: white;
	font-size: 1rem;
	font-weight: 400;
	margin-top: 1rem;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
		text-underline-offset: 0.5rem;
	}
`;