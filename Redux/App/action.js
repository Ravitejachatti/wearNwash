import axios from "axios"
import * as types from "./actionTypes"


export const getBasedOnLocation =()=> (dispatch)=>{
     dispatch({type:types.GET_LOCATION_REQUEST})

   return  axios.get("https://fakestoreapi.com/products")
     .then(res=>{
      return  dispatch({type:types.GET_LOCATION_SUCCESS, payload:res.data})
     })
     .catch(err=>{
     return  dispatch({type:types.GET_LOCATION_FAILURE, payload:err})
     })
}