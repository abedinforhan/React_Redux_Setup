//creating all the action creators here

// Action Creator:  is simply a function that return  an object  with a type property and a payload that is optional

// importing the types
import { BUY_CAKE } from './cakeTypes';

export const buyCake=()=>{
    return {
        type: BUY_CAKE,
        payLoad:"optional "

    }
}
