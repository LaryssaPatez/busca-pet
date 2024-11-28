import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    height: 31rem;
    max-width: 21.5rem;
    
    border-radius: 0.5rem;

    h2 {
        background-color: ${theme.colors.primary};
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 0.5rem 0;
    }

    .image-container {
        height: 100rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #333333;
    }

    svg {
        font-size: 1.5rem;
        color: ${theme.colors.secondary};
        cursor: pointer;

    }

    p {
        font-size: 1.125rem;
        color: #333333;
    }
    
    > span {
        display: flex;
        flex-direction: column;
    }

    span:hover {
        color: ${theme.colors.primary};
    }

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }

    form input {
        width: 4rem;
    }

    form button {
        padding: 0.25rem;
        border: 2px solid ${theme.colors.primary};
        border-radius: 0.5rem;
    }
    
    button:hover {
        font-weight: 700;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
        transition: 0.2s;
    }
`;