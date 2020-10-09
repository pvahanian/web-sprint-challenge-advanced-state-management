import React, { useEffect} from "react";
import { connect } from "react-redux";
import { fetchSmurfData,sendSmurfData } from "../actions/actions";
import "./App.css";


function App (props) {
  const {fetchSmurfData, sendSmurfData}= props;

  useEffect(() => {
    fetchSmurfData();
  }, [fetchSmurfData]);

  const onClick = (e) => {
  e.preventDefault();
  sendSmurfData()
  };

  
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {console.log(props)}
        {/* <h2>{props.smurfs.name}</h2> */}
        {props.smurfs?
        props.smurfs.map((smurf) =>
        <div>
          <h3> Smurfs Name   : {smurf.name}</h3>
          <h3> Height    :{smurf.height}</h3> 
          <h3> Age    :{smurf.age}</h3> 
        </div>
        )
        :console.log(props)}

       <button onClick={onClick}>Add New smurf</button>
       </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchSmurfData, sendSmurfData })(App);
