// Recuer: Reducer is  a function that accept  a state as intialState and action as argument  and return a new State . It cahnge state based on action type and updates state immutably

//importing the constants types
import { BUY_CAKE } from './cakeTypes'

const intitialCakeSate= {
    numOfCakes:10 
}

const cakeReducer=(state=intitialCakeSate,action)=>{

    switch(action.type){
          case BUY_CAKE : return{
              ...state,
              numOfCakes: state.numOfCakes-1
          }

          default: return state
    }
}

export default cakeReducer;