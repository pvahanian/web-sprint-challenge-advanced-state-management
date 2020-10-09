import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_POST = "PUSH_DATA";

export const fetchSmurfData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
        dispatch({ type: FETCH_SUCCESS, payload: res.data })
    })
    
    .catch((err) => {
      //console.log(err);
    });
};
const newSmurf = {"name":"last","age":2130,"height":"52cm"}

export const sendSmurfData = () => (dispatch) => {

    axios.post(`http://localhost:3333/smurfs`,newSmurf)
        .then((res) => {
        dispatch({ type: FETCH_POST, payload: res.data })
    })
    .catch((err) => {
        // console.log("throwing error")
        // console.log(err);
        
    });
};



