import { iAction } from "../../interfaces/Redux";
import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from "../actions/api";

const initialState = {
    isFeching: true,
    messageError: undefined,
    response: {}
}

export const fetchApiReducer = (state = initialState, action: iAction) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isFeching: true
            }
        case FETCH_ERROR:
            return {
                ...state,
                isFeching: false,
                response: [],
                messageError: action.payload
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFeching: false,
                messageError: undefined,
                response: action.payload
            }
        default:
            return {
                ...state
            }
    }

}