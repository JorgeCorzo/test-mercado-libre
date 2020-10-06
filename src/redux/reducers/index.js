import {combineReducers} from 'redux';
import products from './products';
import details from './details';
import description from './description';

const rootReducer = combineReducers({
    products,
    details,
    description
});

export default rootReducer