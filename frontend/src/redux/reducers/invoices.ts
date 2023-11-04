import { 
  INVOICES_LOADING,
  GET_INVOICES_ERROR,
  SET_INVOICES
} from "../actions/types";

const initialState = {
  loading: false,
  errorMessage: null,
  items: [],
  current: null
};

export default function(state = initialState, action:any) {
  switch (action.type) {
    case INVOICES_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case GET_INVOICES_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    }
    case SET_INVOICES: {
      return {
        ...state,
        items: action.payload
      };
    }
    default:
      return state;
  }   
}