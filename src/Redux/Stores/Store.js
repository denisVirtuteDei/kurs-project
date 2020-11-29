import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { entityReducer } from '../Reducers/EntityReducer';
import { personReducer } from '../Reducers/PersonReducer';
import { employeeReducer } from '../Reducers/EmployeeReducer';
import { authReducer } from '../Reducers/AuthReducer';

export const reducers = combineReducers({
    entityPersons: entityReducer,
    persons: personReducer,
    authorization: authReducer,
    employeeReducer: employeeReducer
});

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)