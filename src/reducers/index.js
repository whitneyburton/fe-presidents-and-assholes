import { combineReducers } from 'redux'
import { hasErroredReducer } from './hasErroredReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { setPresidentsReducer } from './setPresidentsReducer'

export const rootReducer = combineReducers({
  hasErrored: hasErroredReducer,
  isLoading: isLoadingReducer,
  presidents: setPresidentsReducer
})