// Users action

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

// FETCH_USERS_BEGIN
export const fetchUsersBegin = () => ({
    type: 'FETCH_USERS_BEGIN'
});

// FETCH_USERS_SUCCESS
export const fetchUsersSuccess = user => ({
    type: 'FETCH_USERS_SUCCESS',
    user
});