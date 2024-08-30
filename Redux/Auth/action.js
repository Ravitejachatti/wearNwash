import axios from "axios";
import * as types from "./actionTypes";

export const postRegister = (payload) => (dispatch) => {
  console.log("Action payload:", payload); // Log payload to check data

  dispatch({ type: types.USER_REGISTER_REQUEST });

  return axios
    .post("http://10.0.2.2:2347/api/user/register", payload)
    .then((res) => {
      console.log("Server response:", res); // Log response for debugging
      dispatch({ type: types.USER_REGISTER_SUCCESS, payload: res.data });
      return res.data; // Return response data for chaining
    })
    .catch((err) => {
      console.log("Error occurred in postRegister:", err); // Log error for debugging
      dispatch({ type: types.USER_REGISTER_FAILURE, payload: err });
      throw err; // Rethrow error to catch it in the component
    });
};
