
// store :  is an object that holds the whole application state

// it accepts  reducer as a argument, here it is rootReducer
import { createStore } from 'redux';
import rootReducer from './rootReducer';


const  store= createStore(rootReducer)

export default store;