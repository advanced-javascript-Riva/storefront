import {createStore} from 'redux';
import Reducer from './rootReducer';

const store = createStore(Reducer);

export default store;