import { CHANGE_INPUT_VAL, ADD_TO_ARR,DELETE_ARR} from "./actionTypes"

export const CHANGE_INPUT_VAL_ACTION = (val) => {
    return {
        type: CHANGE_INPUT_VAL,
            value: val
    }
}

export const ADD_TO_ARR_ACTION = () => {
    return { 
        type:ADD_TO_ARR
    }
}
export const DELETE_ARR_ACTION = (val)=>{
    return {
        type :DELETE_ARR,
        value:val
    }
}