import axios from "axios"
import * as types from "./actionTypes"


export const getBasedOnLocation =()=> (dispatch)=>{
     dispatch({type:types.GET_LOCATION_REQUEST})

   return  axios.get("http://10.10.5.44:2347/api/centers")
     .then(res=>{
      console.log("acton res", res.data)
      return  dispatch({type:types.GET_LOCATION_SUCCESS, payload:res.data.data})
     })
     .catch(err=>{
     return  dispatch({type:types.GET_LOCATION_FAILURE, payload:err})
     })
}