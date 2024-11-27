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
        padding: 1.25rem 0;
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
    padding: 1.5rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
    }

    h3 {
        font-weight: 600;
        color: #424242;
    }

    svg {
        color: ${theme.colors.secondary}
    }

    p {
        font-size: 1rem;
        color: #424242;
    }
    
    span {
        display: flex;
        align-items: center;
        gap: 1rem;

        :hover {
            color: ${theme.colors.primary};
            cursor: pointer;
        }
    }
`;