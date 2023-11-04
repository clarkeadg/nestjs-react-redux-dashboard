import { 
  LOGIN,
  LOGOUT,
  AUTH_FAILED,
  AUTH_LOADING
 } from "../actions/types";

import { setToken, getToken, deleteToken } from "../../utils/token"

const initialState = {
  loading: false,
  token: getToken(),
  errorMessage: null
};

export default function(state = initialState, action:any) {
  switch (action.type) {
    case LOGIN: {
      setToken(action.payload);
      return {
        ...state,
        token: action.payload,
        errorMessage: null
      };
    }
    case LOGOUT: {
      deleteToken();
      return {
        ...state,
        token: null,
      };
    }
    case AUTH_LOADING: {
      return {
        ...state,
        loading: action.payload
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }   
}