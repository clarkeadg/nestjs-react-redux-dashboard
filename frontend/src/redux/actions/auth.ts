import { 
  LOGIN,
  LOGOUT,
  AUTH_FAILED,
  AUTH_LOADING,
} from "./types";

import axios from "axios";
import { getApiUrl } from "../../utils/config"

export function login(email:string, password:string) {
  return function(dispatch:any) {
    dispatch(loading(true))
    setTimeout(()=>{ 
      return axios.post(`${getApiUrl()}/auth/login`, {
          email,
          password
        }, {
        headers: {
          'Content-Type': 'application/json',
        }})
        .then(({ data }) => {
          dispatch(loading(false))
          if (data && data.accessToken) { 
            dispatch(handleLogin(data.accessToken))        
          } else {
            dispatch(handleError("There was an error logging in."))
          }      
        })
        .catch(() => {
          dispatch(handleError("There was an error logging in."))
        });
    },1000)
  };
}

export const handleLogin = (token:string) => ({
  type: LOGIN,
  payload: token
});

export const logout = () => ({
  type: LOGOUT,
  payload: null
});

export const loading = (state:boolean) => ({
  type: AUTH_LOADING,
  payload: state
});

export const handleError = (message:string) => ({
  type: AUTH_FAILED,
  payload: message
});
