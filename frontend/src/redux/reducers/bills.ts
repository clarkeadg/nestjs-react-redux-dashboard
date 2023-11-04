import { 
  BILLS_LOADING,
  GET_BILLS_ERROR,
  SET_BILLS

} from "../actions/types";

const initialState = {
  loading: false,
  errorMessage: null,
  items: []
};

export default function(state = initialState, action:any) {
  switch (action.type) {
    case BILLS_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case GET_BILLS_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    }
    case SET_BILLS: {
      return {
        ...state,
        items: action.payload
      };
    }
    default:
      return state;
  }   
}