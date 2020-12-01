import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { entityReducer } from '../Reducers/EntityReducer';
import { personReducer } from '../Reducers/PersonReducer';
import { employeeReducer } from '../Reducers/EmployeeReducer';
import { authReducer } from '../Reducers/AuthReducer';
import { debtInfoReducer } from '../Reducers/DebtInfoReducer';

export const reducers = combineReducers({
    entityPersons: entityReducer,
    persons: personReducer,
    authorization: authReducer,
    employees: employeeReducer,
    debtInfo: debtInfoReducer
});

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)