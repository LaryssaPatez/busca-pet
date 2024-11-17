import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PageWrapper = styled.section`
    padding: 1.5rem;
    height: 35.625rem;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: 85rem;
    min-width: 85rem;

    align-items: left;

    h2 {
        color: ${theme.colors.secondary};
        font-size: 3rem;
        font-weight: bold;
        padding-left: 5rem;
        margin-bottom: 3rem;
    }

    article {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
    }
`;