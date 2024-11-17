import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90rem;
    height: 100vh;
    margin: 0 auto;

    span {
        display: flex;
        gap: 2rem;
    }
`;

export const Header = styled.header`
    height: 6rem;
    padding: 1rem 0;
    font-weight: 400;
    width: 100%;

    a {
        font-weight: 600;
        cursor: pointer;
        color: ${theme.colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    } 

    h1 {
        color: ${theme.colors.secondary};
        font-size: 2rem;
        font-weight: 600;
        padding-top: 0.5rem;
    }
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 1rem;
`;

export const FilterContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 25rem;
    height: fit-content;
    border-radius: 0.5rem;
    border: 1px solid lightgray;
    padding: 1.5rem;


    > label {
        margin-bottom: 0.25rem;
        font-weight: 600;
    }

    select, input {
        margin-bottom: 1rem;
        border-radius: 0.25rem;
        border: 1px solid lightgray;
        padding: 0.5rem;
        transition: border 0.2s ease;

        &:focus {
            outline: none;
            border: 2px solid ${theme.colors.primary};
        }

        &:hover {
            border: 1px solid ${theme.colors.primary};
        }
    }
`;

export const SearchInputWrapper = styled.div`
    position: relative;
    
    svg {
        position: absolute;
        left: 0.5rem;
        top: 1.25rem;
        transform: translateY(-50%);
        color: #696969;
    }

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
        border: 1px solid lightgray;
        margin-bottom: 1rem;
        padding-left: 1.8rem;
        cursor: text;
        transition: border 0.2s ease;

        &:focus {
            outline: none;
            border: 2px solid ${theme.colors.primary};
        }
    }
`;

export const NotFoundContent = styled.p`
    width: 57rem;
    display: flex;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 500;
`;

export const Content = styled.span`
    display: flex;
`;