
import {legacy_createStore} from 'redux'
import {reducer as AuthReducer} from  './AuthReducer/reducer'
import { reducer as TaskReducer } from './TaskReducer/reducer'
import { applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
let rootReducer=combineReducers({AuthReducer,TaskReducer})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))