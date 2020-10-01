import {combineReducers} from 'redux-immutable';
import {createStore,applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

// import axios from 'axios';
// import { addDataToMinePageActionCreator } from '@/store/action';

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer,applyMiddleware(thunk));



export default store;