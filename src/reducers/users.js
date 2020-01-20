const usersReducerDefaultState = {
    users: [],
    loading: false
};

export default (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_BEGIN':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.user
            }
        default:
            return state;
    }
};