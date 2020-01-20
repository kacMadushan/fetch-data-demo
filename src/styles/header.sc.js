import styled from 'styled-components';
import { colors } from './colors';

export const HeaderContainer = styled.div`
    display: block;
    text-align: center;
    width: 100%;
    height: auto;
    margin: 20px auto;
`;

export const Title = styled.h1`
    color: ${colors.dark};
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 6px;
`;

export const Dvid = styled.div`
    width: 56px;
    height: 4px;
    margin: 0 auto;
    text-align: center;
    border-radius: 6px;
    background-color: ${colors.blue};
`;