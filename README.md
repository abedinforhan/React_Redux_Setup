## How to set up React with popular state management library Redux

### In order to setup react with redux , we have to install two libraries in react

1. redux
1. react-redux

## How to Install:

`npm i redux react-redux`

## Folder structure:

![This is a flowchart text.](/src/images/flowchart.png "This is a flowchart")

## Three Core Principles:

1. Maintain Application state in a single object that is managed by redux store.
   Example:
   {
   numOfCakes: 10
   }

1. The only way to change the state is to emit an action . An action is simply just an object that describes what happened.

##### Note: We can not update state directly. We must use spread operator to copy the previous state and change the property accordingly, then update the state with this new object.

##### Example :

```
 {
  ... state,
     numOfCakes: state.numOfCakes-1
}
```

3. Write pure reducers to specify how state should change based on the actions .

#### Example:

```
 const reducer=(state,action)=> newState
```

### Action Types:

Action types indiactes string constatnts of an action. It is used to avoid spelling mistake of types string in our application.

```
export const BUY_CAKE='BUY_CAKE'
```

### Actions:

- A plain javascript object
- Must have to be a type property indicates the type of action being performed
- Can carry some extra information which is called payLoad

```
{
  type: BUY_CAKE,
  payLoad: " Some extra information  "
}
```

### Action Creators:

is simply a function that return an object with a type property and a payload that is optional

```
export const buyCake=()=>{
    return {
        type: BUY_CAKE,
        payLoad:"optional "
  }
}
```

### Reducer:

is a function that accept a state as intialState and action as argument and return a new State . It cahnge state based on action type and updates state immutably.

```
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
```

### comineReducers:

it is a function that combines all the reducers of the applicartion. We have to use combineReducers function from 'redux' as we know store can take only one reducer as an argument.

```
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";


const rootReducer= combineReducers({
    cake: cakeReducer
})

export default rootReducer;
```

### store: is an object that holds the whole application state. It accepts only one reducer as an argument, here it is rootReducer.

```
import { createStore } from 'redux';
import rootReducer from './rootReducer';


const  store= createStore(rootReducer)

export default store;
```

So, we have successfully use 'redux' library to implement the redux pattern for our application . Now we have to use 'react-redux' libarary to connect our 'react' application with 'redux'

### In app.js:

we need a 'provider' to provide store to the react components.Provider accepts a store as a argument , so that all the components can get data from provider.

```
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';

const centerStyle ={ textAlign: 'center' }

function App() {
  return (
    <Provider store={store}>
      <div  style={centerStyle}>
         <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
```

### In a react component(CakeContainer.js):

#### We have to do 3 steps to connect our react component with redux store.

1. mapStateToProps
1. mapDispatchToProps
1. connect

We have to import 'connect' , a higher order component that connects a react component with mapStateToProps and mapDispatchToProps function to get the state and dispatch method.

```
import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2> Number of cakes : {numOfCakes}</h2>
      <button onClick={buyCake}> Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);
```

Thank You...... !
