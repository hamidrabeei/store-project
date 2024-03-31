import {createStore , combineReducers , applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk' // manage async,await 

 const reducer = combineReducers({ })

 const initialState = {}

 const middleware = {thunk}  // add thunk middleware

const store = createStore(reducer , initialState ,applyMiddleware(...middleware)) //main satore

export default store