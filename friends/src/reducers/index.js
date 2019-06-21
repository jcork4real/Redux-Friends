import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions';
import { FETCH_FRIENDS, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
import { ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE } from '../actions';
import { DELETE_FRIEND_START, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE } from '../actions';
import { EDIT_FRIEND_START, EDIT_FRIEND_SUCCESS, EDIT_FRIEND_FAILURE } from '../actions';

const initialState = {
  friends: [],
  isLoggingIn: false,
  isFetching: false,
  error: null,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  isLoggedIn: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      }
    case LOGOUT:
      return {
        friends: [],
        isLoggingIn: false,
        isFetching: false,
        error: null,
        isAdding: false,
        isDeleting: false,
        isUpdating: false,
        isLoggedIn: false,
      }
    case FETCH_FRIENDS:
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload 
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_FRIEND_START:
      return {
        ...state,
        isAdding: true,
        error: '',
      }
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        isAdding: false,
        friends: action.payload 
      }
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      }
    case DELETE_FRIEND_START:
      return {
        ...state,
        isDeleting: true,
        error: ''
      }
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        friends: action.payload
      }
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      }
    case EDIT_FRIEND_START:
      return {
        ...state,
        isEditing: true,
        error: ''
      }
    case EDIT_FRIEND_SUCCESS:
      return {
        ...state,
        isEditing: false,
        friends: action.payload
      }
    case EDIT_FRIEND_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer;