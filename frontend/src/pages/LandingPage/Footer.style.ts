import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledFooter = styled.footer`
    max-width: 95rem;
    min-width: 95rem;
    margin: 0 auto;

    background-color: ${theme.colors.primary};
    color: white;
    font-weight: 300;
    font-size: 1.1rem;
    
    display: flex;
    text-align: center;
    flex-direction: column;
    
    position: relative;
    height: 28rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;

    h1 {
        color: ${theme.colors.textLight};
        font-size: 3.5rem;
        font-weight: bold;
        margin-top: 5.5rem;
    }

    svg {
        position: absolute;
        bottom: calc(86% - 3rem);
        right: 5rem;

        background-color: ${theme.colors.textLight};
        border-radius: 6px;
        height: 4rem;
        width: 4rem;

        padding: 0.7rem;
        color: ${theme.colors.primary};
        cursor: pointer;
    }

    ul {
        display: flex;
        justify-content: center;
        margin: 4.5rem 0;
        gap: 3rem;

        li:nth-child(1) {
            text-decoration: 2px underline ${theme.colors.textLight};
            text-underline-offset: 0.5rem;
        }
    }

    p {
        margin-bottom: 5.5rem;
        span {
            margin-left: 1rem;
        }
    }
`;