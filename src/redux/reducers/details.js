import * as Actions from '../types';

const initialState = {
    details: [],
    loading: false,
    message: ''
}

export default function details(state = initialState, action) {
    switch (action.type) {
        case Actions.START_GET_DETAILS: {
            return {
                ...state,
                loading: true
            };
        }
        case Actions.SUCCESS_GET_DETAILS: {
            return {
                ...state,
                details: action.payload,
                loading: false
            };
        }
        case Actions.FAIL_GET_DETAILS: {
            return {
                ...state,
                loading: false,
                message: action.error
            };
        }
        default:
            return state;
    }
}