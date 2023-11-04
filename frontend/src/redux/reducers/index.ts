import { combineReducers } from 'redux'

import authReducer from './auth'
import billsReducer from './bills'
import invoicesReducer from './invoices'
import modalReducer from './modal'

const rootReducer = combineReducers({
  auth: authReducer,
  bills: billsReducer,
  invoices: invoicesReducer,
  modal: modalReducer
})

export default rootReducer