import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    height: 800px;
    max-width: 550px;
    margin: auto;
    background-color: ${theme.colors.secondary};
    color: white;
    border-radius: 0.75rem;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 0.5rem;
    }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

export const ImageSelection = styled.div`
  display: flex;
  justify-content: center;
  height: 10rem;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 1rem;
    cursor: pointer;

    &.active {
      border-color: ${theme.colors.secondary};
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    color: white;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  select,
  input {
    background-color: white;
    color: black;
  }

  textarea {
    background-color: white;
    color: black;
    height: 6rem;
    resize: vertical;
  }
`;

export const SubmitButton = styled.input`
  background-color: ${theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 1rem;
  transition: background-color 0.3s;
  width: 10rem;

  &:hover {
    background-color: ${theme.colors.primary};
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FromContainer = styled.div`
  display: grid;
  width: 30rem;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const LocationContainer = styled.span`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const CloseButton = styled.button`
	position: relative;
	top: -23rem;
	right: -15.5rem;
	background: none;
	border: none;
	font-size: 2rem;
	color: white;
	cursor: pointer;
  z-index: 10;
`;

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