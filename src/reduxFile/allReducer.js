import { combineReducers } from 'redux';
import { taskReducer } from './taskReducer';

export const allReducer = combineReducers({
    taskReducer: taskReducer
});