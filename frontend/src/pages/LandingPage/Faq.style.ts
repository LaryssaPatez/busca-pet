import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SectionWrapper = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 7.5rem 0 11rem;
    gap: 2rem;
    height: auto;
    max-width: 95rem;
    min-width: 95rem;
`;

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    width: 47.5rem;
`;

export const FAQTitle = styled.h2`
    color: ${theme.colors.primary};
    font-weight: bold;
    font-size: 5rem;
    padding-top: 12.5rem;

    > span {
        font-size: 1.5rem;
    }
`;

export const FAQItem = styled.div`
    width: 100%;
    border-top: 2px solid ${theme.colors.secondary};
    border-bottom: 2px solid ${theme.colors.secondary};
    padding: 0.5625rem 0;
    transition: all 0.3s ease-in-out;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

export const FAQHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 3rem;

    h3 {
        flex-grow: 1;
    }

    div {
        width: 2rem;

        svg {
            font-size: 2rem;
        }
    }
`;

export const FAQAnswer = styled.p`
    padding: 1rem 4rem 0;
    font-size: 1rem;
    color: #444;
    line-height: 1.5;
`;

export const ImageContainer = styled.div`
    width: 22rem;
    margin-top: 2.5rem;

    img {
        width: 25rem;
        height: auto;
    }
`;