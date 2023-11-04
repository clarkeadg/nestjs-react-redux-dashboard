import { 
  INVOICES_LOADING,
  GET_INVOICES_ERROR,
  SET_INVOICES,
} from "./types";

import axios from "axios";
import { getApiUrl } from "../../utils/config"
import { getToken } from "../../utils/token"

export function fetchInvoices() {
  return function(dispatch:any) {
    dispatch(loading(true))
    setTimeout(()=>{ 
      return axios.get(`${getApiUrl()}/invoices`, {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
        .then(({ data }) => {
          dispatch(loading(false))
          dispatch(setInvoices(data));
        })
        .catch(() => {
          dispatch(handleError("There was an error"))
        });
    },500)
  };
}

function setInvoices(data:any) {
  return {
    type: SET_INVOICES,
    payload: data
  };
}

export const loading = (state:boolean) => ({
  type: INVOICES_LOADING,
  payload: state
});

export const handleError = (message:string) => ({
  type: GET_INVOICES_ERROR,
  payload: message
});
