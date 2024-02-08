import { configureStore, combineReducers } from '@reduxjs/toolkit'
import reduxToolkitSLice from './reduxToolkitSLice'

const rootReducer = combineReducers({
	toolkit: reduxToolkitSLice
})

export const store = configureStore({
	reducer: rootReducer
})
