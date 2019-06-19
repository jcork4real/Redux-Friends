import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_SUCCESS';

export const getFriends = () => dispatch => {
  dispatch({
    type: FETCH_FRIENDS
  })
  axios.get('http://localhost:5000/api/friends')
    .then(response => {
      console.log('fetching friends from API', response);
      dispatch({
        type: FETCH_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('error while fetching friends from API', error);
      dispatch({
        type: FETCH_FAILURE,
        payload: error
      })
    })
}