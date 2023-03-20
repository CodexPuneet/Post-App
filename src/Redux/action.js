import * as types from "./actionTypes";

const getPostRequest = () => {
  return { type: types.GET_POST_REQUEST };
};

const getPostSuccess = (payload) => {
  return { type: types.GET_POST_SUCCESS, payload };
};

const getPostError = () => {
  return { type: types.GET_POST_FAILURE };
};



export { getPostRequest, getPostSuccess, getPostError };
