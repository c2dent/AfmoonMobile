import { combineReducers } from 'redux';
import { searchReducer } from './Search/reducers';
import { adDetailReducer } from './AdDetail/reducers'

export default combineReducers({
    ads: searchReducer,
    adDetail: adDetailReducer,
});