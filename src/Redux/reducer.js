import * as types from "./actionTypes";


const initState = {
  isLoading: false,
  isError: false,
  isPost:[]
};



const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_POST_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_POST_SUCCESS:
      return { ...state, isLoading: false,  isPost: payload};
    case types.GET_POST_FAILURE:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
export { reducer };
