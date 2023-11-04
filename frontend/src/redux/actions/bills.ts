import { 
  BILLS_LOADING,
  GET_BILLS_ERROR,
  SET_BILLS,
} from "./types";

import axios from "axios";
import { getApiUrl } from "../../utils/config"
import { getToken } from "../../utils/token"

export function fetchBills() {
  return function(dispatch:any) {
    dispatch(loading(true))
    setTimeout(()=>{    
      return axios.get(`${getApiUrl()}/bills`, {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
        .then(({ data }) => {
          dispatch(loading(false))
          dispatch(setBills(data));
        })
        .catch(() => {
          dispatch(handleError("There was an error"))
        });
    },500)
  };
}

function setBills(data:any) {
  return {
    type: SET_BILLS,
    payload: data
  };
}

export const loading = (state:boolean) => ({
  type: BILLS_LOADING,
  payload: state
});

export const handleError = (message:string) => ({
  type: GET_BILLS_ERROR,
  payload: message
});
