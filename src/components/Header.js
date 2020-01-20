import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContainer, Title, Dvid } from '../styles/header.sc';

const Header = ({ title }) => (
    <HeaderContainer>
        <Title>{title}</Title>
        <Dvid></Dvid>
    </HeaderContainer>
);

Header.defaultProps = {
    title: 'Users App!'
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;