// our initial state is an object in which the value of the key property "loading" is set to true, while our "movie" property is an empty array, and finally our "errorMessage" key property is set to null
export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

// This is our reducer function which takes in the initialState and the action. So based on the action type, the reducer returns a new state object
export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
