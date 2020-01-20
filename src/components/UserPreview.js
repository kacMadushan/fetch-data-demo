import React from 'react';
import PropTypes from 'prop-types';
import { UserContainer, UserName, UserEmail } from '../styles/userPreview.sc';

const UserPreview = ({ name, email }) => (
    <div className="col-sm-6 col-md-4 col-lg-3">
        <UserContainer>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
        </UserContainer>
    </div>
);

UserPreview.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
};

export default UserPreview;