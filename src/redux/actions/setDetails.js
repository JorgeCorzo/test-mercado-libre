import * as types from '../types';

export function getDetails(details){
    return{
        type: types.START_GET_DETAILS,
        payload: details
    }
}