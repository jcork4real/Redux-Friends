import axios from 'axios';
import axiosWithAuth from '../utilties/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => (dispatch) => {
  dispatch({
    type: LOGIN_START
  })
  return axios.post('http://localhost:5000/api/login', credentials)
    .then(response => {
      console.log('login success: ', response)
      dispatch({
        type: LOGIN_SUCCESS,
      })
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

export const LOGOUT = 'LOGOUT';

export const logout = () => {
  return ({
    type: LOGOUT
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

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const addFriend = (input) => (dispatch) => {
  dispatch({
    type: ADD_FRIEND_START
  })
  axiosWithAuth().post('http://localhost:5000/api/friends', input)
    .then(response => {
      console.log('adding friend success: ', response);
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('adding friend error: ', error);
      dispatch({
        type: ADD_FRIEND_FAILURE,
        payload: 'error adding friend'
      })
    })
}

export const DELETE_FRIEND_START = 'DELETE_FRIEND_START';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';
export const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE';

export const deleteFriend = (id) => (dispatch) => {
  dispatch({
    type: DELETE_FRIEND_START
  })
  axiosWithAuth().delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log('deleting friend success: ', response);
      dispatch({
        type: DELETE_FRIEND_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('deleting friend error: ', error);
      dispatch({
        type: DELETE_FRIEND_FAILURE,
        payload: 'error deleting friend'
      })
    })
}

export const EDIT_FRIEND_START = 'EDIT_FRIEND_START';
export const EDIT_FRIEND_SUCCESS = 'EDIT_FRIEND_SUCCESS';
export const EDIT_FRIEND_FAILURE = 'EDIT_FRIEND_FAILURE';

export const editFriend = (friend) => (dispatch) => {
  dispatch({
    type: EDIT_FRIEND_START
  })
  axiosWithAuth().put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    .then(response => {
      console.log('editing friend success: ', response);
      dispatch({
        type: EDIT_FRIEND_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('editing friend error: ', error);
      dispatch({
        type: EDIT_FRIEND_FAILURE,
        payload: 'error editing friend'
      })
    })
}