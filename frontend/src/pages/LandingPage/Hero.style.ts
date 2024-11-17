import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHero = styled.section`
    display: flex;
    padding-left: 8rem;
    max-width: 85rem;
    min-width: 85rem;
    max-height: 40rem;
    min-height: 40rem;
    overflow: hidden;
    
    h2 {
        margin-top: 6rem;
        font-size: 4rem;
        color: ${theme.colors.secondary};
        font-weight: bold;
        width: 25rem;
        line-height: 4rem;
    }

    p {
        width: 30rem;
        text-align: justify;
        font-size: 1rem;
        letter-spacing: 0.2px;
        margin-top: 1.5rem;
    }

    .button-group {
        display: flex;
        gap: 1.25rem;
        margin-top: 2rem;
        height: 3.5rem;

        button {
            background-color: ${theme.colors.primary};
            color: white;
            border-radius: 6px;
            padding: 0.9rem 1rem;
            font-weight: 600;
            width: 14.5rem;
            height: 3.5rem;
        }
    }

    .hero-content {
        height: 34rem;
        width: 54rem;
    }

    .hero-image {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 34rem;
        min-height: 34rem;

        img {
            width: 650px;
            height: 650px;
            object-fit: fit;
            flex-shrink: 0;
        }
    }
`;