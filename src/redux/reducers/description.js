import * as Actions from '../types';

const initialState = {
    description: [],
    message: ''
}

export default function description(state = initialState, action) {
    switch (action.type) {
        case Actions.START_GET_DESCRIPTION: {
            return {
                ...state,
            };
        }
        case Actions.SUCCESS_GET_DESCRIPTION: {
            return {
                ...state,
                description: action.payload
            };
        }
        case Actions.FAIL_GET_DESCRIPTION: {
            return {
                ...state,
                message: action.error
            };
        }
        default:
            return state;
    }
}