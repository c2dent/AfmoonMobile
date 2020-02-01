import { combineReducers } from 'redux';
import { searchReducer } from './Search/reducers';
import { adDetailReducer } from './AdDetail/reducers'
import { chooseCategoryReducer } from './ChooseCategory/reducers'
import { extendedSearchReducer } from './ExtendedSearch/reducers'

export default combineReducers({
    ads: searchReducer,
    adDetail: adDetailReducer,
    category: chooseCategoryReducer,
    extendedSearch: extendedSearchReducer,
});