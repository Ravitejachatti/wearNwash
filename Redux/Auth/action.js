import axios from "axios";
import * as types from "./actionTypes";

export const postRegister = (payload) => (dispatch) => {
 // console.log("Action payload:", payload); 

  dispatch({ type: types.USER_REGISTER_REQUEST });

  return axios
    .post("http://10.0.2.2:2347/api/user/register", payload)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER_SUCCESS, payload: res.data });
      return res.data; 
    })
    .catch((err) => {
      dispatch({ type: types.USER_REGISTER_FAILURE, payload: err });
      throw err; 
    });
};



export const postLogin = (payload) => (dispatch) => {
   dispatch({ type: types.USER_LOGIN_REQUEST });
   return axios
     .post("http://10.0.2.2:2347/api/user/login", payload)
     .then((res) => {
       dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data });
       return res.data; 
     })
     .catch((err) => {
       dispatch({ type: types.USER_LOGIN_FAILURE, payload: err });
       throw err; 
     });
 };