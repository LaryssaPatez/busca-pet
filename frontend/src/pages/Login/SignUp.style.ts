import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;

  img {
    border-radius: 0.5rem 0 0 0.5rem;
    width: 18.5rem;
    height: 37rem;
    object-fit: cover;
  }

  form {
    border: 1px solid #e6e6e6;
    border-radius: 0 0.5rem 0.5rem 0;
    width: 31rem;
    height: 37rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3rem;

    h1 {
      margin: 0 auto 2rem auto;
      color: ${theme.colors.primary};
      font-size: 3rem;
      font-weight: bold;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      font-weight: 600;

      input {
        background-color: #f9f9f9;
        padding: 0.5rem 1rem;
        border: 1px solid #e6e6e6;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 400;
      }
    }

    button {
      background-color: ${theme.colors.secondary};
      color: white;
      font-size: 1.5rem;
      font-weight: 600;
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      margin-top: 1rem;
    }

    .backHome {
      position: relative;
      top: 14%;
      left: 90%;
      font-size: 3rem;
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  }
`;
