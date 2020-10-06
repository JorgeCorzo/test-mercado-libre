import * as Actions from '../types';

const initialState = {
    products: [],
    loading: false,
    message: ''
}

export default function products(state = initialState, action) {
    switch (action.type) {
        case Actions.START_GET_PRODUCTS: {
            return {
                ...state,
                loading: true
            };
        }
        case Actions.SUCCESS_GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        }
        case Actions.FAIL_GET_PRODUCTS: {
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