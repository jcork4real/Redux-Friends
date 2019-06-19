import { FETCH_FRIENDS, FETCH_SUCCESS, FETCH_FAILURE } from '../actions'

const initialState = {
  friends: [],
  isDeleting: false,
  isFetching: false,
  isLoggedIn: false,
  isSaving: false,
  isUpdating: false,
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        isFetching: true,
        isLoggedIn: true,
        error: null,
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