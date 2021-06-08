import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { registrateReducer } from '../Reducers/CreatePersonsReducer'
import { employeeReducer } from '../Reducers/EmployeeReducer'
import { authReducer } from '../Reducers/AuthReducer'
import { debtInfoReducer } from '../Reducers/DebtInfoReducer'
import { nceaReducer } from '../Reducers/NceaInfoReducer'
import { bankCheckInfoReducer } from '../Reducers/BankCheckInfoReducer'
import { declarationReducer } from '../Reducers/DeclarationReducer'
import rootSaga from '../../Saga'
import { loadStateFromSessionStorage, saveStateToSessionStorage } from './sessionStore'

export const reducers = combineReducers({
  authorization: authReducer,
  employees: employeeReducer,
  ncea: nceaReducer,
  checkInfo: bankCheckInfoReducer,
  declarations: declarationReducer,
  registrate: registrateReducer,
  debtInfo: debtInfoReducer,
})

const sagaMiddleware = createSagaMiddleware()
const persistedState = loadStateFromSessionStorage()
const store = createStore(
  reducers,
  persistedState,
  compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveStateToSessionStorage(store.getState())
})

export default store