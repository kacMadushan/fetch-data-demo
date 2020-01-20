import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from '../reducers/users';

// Redux dev-tools extension - compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
export default () => {
    const store = createStore(
        combineReducers({
            usersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
};

