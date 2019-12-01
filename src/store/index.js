import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import listings from './listings';

const rootReducer = combineReducers({
    listings
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));