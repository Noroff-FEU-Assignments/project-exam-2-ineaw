import Router from 'next/router';
import Cookies from 'js-cookie';
import { fetcher } from './api';
import { API_URL } from 'lib';


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const setToken = (data) => {
  if (typeof window === 'undefined') {
    
    return;
  }
  Cookies.set('id', data.user.id);
  Cookies.set('username', data.user.username), { secure: true }, { sameSite: 'strict' };
  Cookies.set('jwt', data.jwt);

  if (Cookies.get('username')) {
    Router.reload('/');
  }
  if (!Cookies.get('username')) {
    return (
      "nothinng here"
    )
  }


};

export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('username');

  Router.reload('/');
};

export const getUserFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`${API_URL}/api/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((data) => {
    
        return data.username;
      })
      .catch((error) => {  toast.error("Upps, someting went wrong")
      
      console.error(error)});
  } else {
    return;
  }
};

export const getIdFromLocalCookie = () => {
  const jwt = getTokenFromLocalCookie();
  if (jwt) {
    return fetcher(`${API_URL}/api/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    }).then((data) => {
      return data.id;
    });
  } else {
    return;
  }
};

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};

export const getTokenFromServerCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const jwtCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith('jwt='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwt;
};

export const getIdFromServerCookie = (req) => {
  if (!req.headers.cookie || '') {
    return undefined;
  }
  const idCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith('id='));
  if (!idCookie) {
    return undefined;
  }
  const id = idCookie.split('=')[1];
  return id;
};

