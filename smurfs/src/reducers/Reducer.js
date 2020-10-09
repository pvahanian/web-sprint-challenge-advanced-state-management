import { FETCH_DATA } from "../actions/actions";
import { FETCH_SUCCESS } from "../actions/actions";
import { FETCH_POST } from "../actions/actions";

const initialState = {
  smurfs:[{
       name:"Loader Smurf",
       age:0,
       height:"1inch",
       id:50
      }],
  isLoading:false,
  error: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
    console.log(action.payload)
    return{
      ...state,
      smurfs: [...state.smurfs, action.payload[0] ]
    } 
      case FETCH_POST:
    console.log(action.payload)
    return{
      ...state,
      smurfs: [...state.smurfs, action.payload[1] ]
    }  


    default:
      return state;
  }
};