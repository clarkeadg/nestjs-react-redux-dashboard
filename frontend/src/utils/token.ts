import Cookies from 'js-cookie'

export const getToken = () => {
  return Cookies.get('token'); 
}

export const setToken = (authToken:string) => {
  Cookies.set('token', authToken, { expires: 1 });
}

export const deleteToken = () => {
  Cookies.remove('token');
}