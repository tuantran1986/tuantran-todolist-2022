import { createStore } from 'redux';
import { allReducer } from './allReducer';

let store = createStore(allReducer);
export default store;