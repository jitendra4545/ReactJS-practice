import { TASK_GET_SUCCESS } from "./actionTypes"


const initialState={
    isError:false,
    isLoading:false,
    tasks:[]
}


const reducer=(state=initialState,action)=>{

    const {payload,type}=action

    switch(type){
        case TASK_GET_SUCCESS:{
            return {
                ...state,tasks:payload
            }
        }
        default :
    return  state
    }

}


export {reducer}