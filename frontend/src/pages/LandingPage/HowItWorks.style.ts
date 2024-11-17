import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SectionWrapper = styled.section`
    display: flex;
    height: 28rem;
    background-color: ${theme.colors.primary};
    flex-shrink: 0;
    min-width: 50rem;
    border-radius: 0.5rem;
    
    .text-container {
        padding-top: 5rem;
        width: 50rem;

        color: white;
        font-weight: 500;
        padding-left: 8rem;
        flex-shrink: 0;

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        p {
            text-align: justify;
            margin: 2rem 0;
            padding-right: 3.5rem;
            line-height: 1.5;
        }

        p:last-of-type {
            text-align: right;
            margin-top: 4rem;
            font-weight: 600;
        }
    }

    .howitworks-image {
        position: relative;
        background-color: ${theme.colors.secondary};
        overflow: hidden;
        width: 45rem;
        flex-shrink: 0;
        border-radius: 0 0.5rem 0.5rem 0;
        img {
            position: absolute;
            top: 8%;
            left: 17%;
            object-fit: contain;
        }
    }
`;