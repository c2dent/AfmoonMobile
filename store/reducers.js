import { combineReducers } from 'redux';
import { searchReducer } from './Search/reducers';
import { adDetailReducer } from './AdDetail/reducers'
import { extendedSearchReducer } from './ExtendedSearch/reducers'
import { generalReducer } from './General/reducers'

export default combineReducers({
    ads: searchReducer,
    adDetail: adDetailReducer,
    extendedSearch: extendedSearchReducer,
    general: generalReducer,
});