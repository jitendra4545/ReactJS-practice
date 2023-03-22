import { LOGIN_SUCCESS, SIGNUP_GET_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes"

const initialState={
    isAuth:false,
    isLoading:false,
    user:[]
}


const reducer=(state=initialState,action)=>{

    const {payload,type}=action

    switch(type){
        case SIGNUP_SUCCESS:{
            return {
                ...state
            }
        }

        case SIGNUP_GET_SUCCESS:{
            return {
                ...state,user:payload
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,isAuth:true
            }
        }

        default :
    return  state
    }

}


export  {reducer}