import { combineReducers } from 'redux';
import searchBarReducer from './SearchBar/searchBarReducer';

const rootReducer = combineReducers({
    apiStore: searchBarReducer,
});

export default rootReducer;