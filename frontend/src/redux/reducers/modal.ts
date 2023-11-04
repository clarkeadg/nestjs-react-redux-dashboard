import { 
  MODAL_LOADING,
  MODAL_ERROR,
  MODAL_DATA,
  TOGGLE_MODAL
} from "../actions/types";

const initialState = {
  loading: false,
  errorMessage: null,
  type: null,
  id: null,
  data: null,
  isOpen: false
};

export default function(state = initialState, action:any) {
  switch (action.type) {
    case MODAL_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case MODAL_ERROR: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    }
    case TOGGLE_MODAL: {
      return {
        ...state,
        isOpen: action.payload.open,
        type: action.payload.type,
        id: action.payload.id,
        data: null
      };
    }
    case MODAL_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  } 
}