import { fetchUsersBegin, fetchUsersSuccess } from '../actions/users';

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersBegin());
        return fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(parsedResponse => parsedResponse.map(user => (
                {
                    id: `${user.id}`,
                    name: `${user.name}`,
                    email: `${user.email}`
                }
            )))
            .then(user => {
                dispatch(fetchUsersSuccess(user))
                return user
            })
    };
}