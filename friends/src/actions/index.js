import axios from 'axios';
import axiosWithAuth from '../utilties/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => (dispatch) => {
  dispatch({
    type: LOGIN_START
  })
  axios.post('http://localhost:5000/api/login', credentials)
    .then(response => {
      console.log('login success: ', response)
      localStorage.setItem('token', response.data.payload);
    })
    .catch(error => {
      console.log('login failure: ', error)
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.response.data.error
      })
    })
}


export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getFriends = () => dispatch => {
  dispatch({
    type: FETCH_FRIENDS
  })
  axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(response => {
      console.log('fetching success: ', response);
      dispatch({
        type: FETCH_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetching error: ', error);
      dispatch({
        type: FETCH_FAILURE,
        payload: error.response.data.error
      })
    })
}