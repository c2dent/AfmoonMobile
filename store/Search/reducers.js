import { GET_AD_LIST,
    SET_SEACH_TEXT,
    LOAD_MORE_AD_LIST,
    MAX_PAGE_TO_TRUE
    } from './actions';

const defaultState = {
    ad_list : '',
    current_page: 0,
    max_page: false,
    valueSearchText:'all Good!!!!',
}
export const searchReducer  = (state=defaultState, action) => {
    switch (action.type) {
        case GET_AD_LIST:
            return {
                ...state,
                ad_list: action.payload.data,
                current_page: 1,
                max_page: false,
            };
        case SET_SEACH_TEXT:
            return {
                ...state,
                valueSearchText: action.payload
            }
        case LOAD_MORE_AD_LIST:
            return {
                ...state,
                ad_list: state.ad_list.concat(action.payload.data),
                current_page: state.current_page + 1
            }
        case MAX_PAGE_TO_TRUE:
            return {
                ...state,
                max_page:action.payload
            }
    }

    return state;
};
