import { 
  MODAL_LOADING,
  MODAL_ERROR,
  MODAL_DATA,
  TOGGLE_MODAL
} from "./types";

import axios from "axios";
import { getApiUrl } from "../../utils/config"
import { getToken } from "../../utils/token"

export const loading = (state:boolean) => ({
  type: MODAL_LOADING,
  payload: state
});

export const handleError = (message:string) => ({
  type: MODAL_ERROR,
  payload: message
});

export const toggalModal = (open:boolean, type:string="", id:number=0) => ({
  type: TOGGLE_MODAL,
  payload: {
    open,
    type,
    id
  }
});

export const setData = (data:any) => ({
  type: MODAL_DATA,
  payload: data
});

export function fetchModalData(type:string, id:number) {
  return function(dispatch:any) {
    dispatch(toggalModal(true, type, id))
    dispatch(loading(true))
    setTimeout(()=>{ 
      return axios.get(`${getApiUrl()}/${type}/${id}`, {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      })
      .then(({ data }) => {
        dispatch(loading(false))
        if (data) {
          dispatch(setData(data));
        } else {
          dispatch(handleError("There was an error"))
        }
      })
      .catch(() => {
        dispatch(handleError("There was an error"))
      });
    },500)
  };
}


