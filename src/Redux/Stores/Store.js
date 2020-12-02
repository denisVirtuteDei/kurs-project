import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { entityReducer } from '../Reducers/EntityReducer';
import { personReducer } from '../Reducers/PersonReducer';
import { employeeReducer } from '../Reducers/EmployeeReducer';
import { authReducer } from '../Reducers/AuthReducer';
import { debtInfoReducer } from '../Reducers/DebtInfoReducer';
import { nceaReducer } from '../Reducers/NceaInfoReducer';
import { bankCheckInfoReducer } from '../Reducers/BankCheckInfoReducer';
import { declarationReducer } from '../Reducers/DeclarationReducer';

export const reducers = combineReducers({
    entityPersons: entityReducer,
    persons: personReducer,
    authorization: authReducer,
    employees: employeeReducer,
    ncea: nceaReducer,
    checkInfo: bankCheckInfoReducer,
    declarations: declarationReducer,
    debtInfo: debtInfoReducer
});

export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)