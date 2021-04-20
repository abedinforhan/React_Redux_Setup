// To combine all the reducers of the applicartion we have to use combineReducers  function from 'redux'  as we know store can take only one reducer as an argument
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";


const rootReducer= combineReducers({
    cake: cakeReducer
})

export default rootReducer;