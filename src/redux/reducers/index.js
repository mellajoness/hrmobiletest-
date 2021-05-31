import {combineReducers} from 'redux';
import deliveryReducer from './deliveryReducer';

export default combineReducers({
    delivery:deliveryReducer 
})