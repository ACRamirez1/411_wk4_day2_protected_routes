import { legacy_createStore as createStore } from'redux';
import reducer from './reducers';
import state from './state';

export default createStore(reducer, state);