import React from "react";
//We have to import connect higher order  component  to connect the react component with mapStateToProps and mapDispatchToProps to get state and action
import { connect } from "react-redux";
import { buyCake } from "../redux";

// here  we get numOfCakes from mapStateToProps as  it returns an  object whose property is numOfCakes  and we get  buyCake from mapDispatchToProps as it returns  an object whose property is buyCake method which is a method

const CakeContainer = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2> Number of cakes : {numOfCakes}</h2>
      <button onClick={buyCake}> Buy Cake</button>
    </div>
  );
};

//3steps:
//mapStateToProps
//mapDispatchToProps
//connect

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
