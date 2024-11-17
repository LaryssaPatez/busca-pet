import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const CardContainer = styled.div`
    color: white;
    background-color: ${theme.colors.secondary};
    height: 22rem;
    width: 23rem;
    padding: 1.625rem 0.5rem;
    border-radius: 0.5rem;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 6.625rem;
      
    img {
        height: 6.625rem;
        width: 6.625rem;
        border-radius: 50%;
        margin-left: 1rem;
    }

    h3 {
        font-size: 2rem;
        font-weight: 600;
    } 
`;

export const CardContent = styled.div`
    padding: 0 1rem;
    margin-top: 1.625rem;

    span {
        display: flex;
        align-items: center;

        h4 {
            font-size: 1.25rem;
            font-weight: 600;
        }

        span {
            margin-left: 0.5rem;
            gap: 0.1rem;
        }
    }

    p {
        width: 100%;
        font-weight: 300;
        margin-top: 0.8rem;
        text-align: justify;
        line-height: 0.875rem;
        font-size: 0.875rem;
        letter-spacing: 0.2px;
    }
`;