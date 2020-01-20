import styled from 'styled-components';
import { colors } from './colors';

export const UserContainer = styled.div`
    display: block;
    text-align: center;
    padding: 12px;
    margin-bottom: 16px;
    border-radius: 3px;
    border: 1px solid ${colors.light};
    background-color: ${colors.white};
`;

export const UserName = styled.h5`
    color: ${colors.dark};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 3px;
`;

export const UserEmail = styled.p`
    color: ${colors.gray};
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 0;
`;