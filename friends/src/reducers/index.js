import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions'
import { FETCH_FRIENDS, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'

const initialState = {
  friends: [],
  isLoggingIn: false,
  isFetching: false,
  error: null,
  /*
  isDeleting: false,
  isSaving: false,
  isUpdating: false,
  */
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
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
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
    default:
      return state
  }
}

export default reducer;