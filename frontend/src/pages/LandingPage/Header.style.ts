import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHeader = styled.header`
    max-width: 85rem;
    min-width: 85rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding: 0 4rem;
`;

export const Logo = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    
    span:first-child {
        color: ${theme.colors.primary};
    }

    span:last-child {
        color: ${theme.colors.secondary};
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    width: 20rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 0;
    gap: 0.5rem;
    
    button {
        border-radius: 0.5rem;
        width: 10rem;
    }

    button:nth-child(1) {
        background-color: ${theme.colors.primary};
        color: white;
    }

    button:nth-child(2) {
        background-color: white;
        color:${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
    }
`;

export const HeaderButton = styled.button``;