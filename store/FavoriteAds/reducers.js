import {
    GET_FAVORITE_AD_DETAIL_LOAD,
    GET_FAVORITE_AD_DETAIL_SUCCESS,
    GET_FAVORITE_ADS,
    GET_FAVORITE_ADS_LOADING,
    GET_FAVORITE_ADS_ERROR,
} from './actions'

const defaultState = {
    isFavoriteLoading: true,
    favoriteAd : '',
    ad_list : '',
    ad_list_loading: true,
    ad_list_error: false,
}

export const favoriteAdsReducer = (state=defaultState, action) => {
    switch (action.type) {
        case GET_FAVORITE_AD_DETAIL_LOAD:
            return {
                ...state,
                isFavoriteLoading: true,
            }
        case GET_FAVORITE_AD_DETAIL_SUCCESS:
            return {
                ...state,
                favoriteAd: action.payload,
                isFavoriteLoading: false,
            }
        case GET_FAVORITE_ADS:
            return {
                ...state,
                ad_list: action.payload,
                ad_list_loading: false,
            }
        case GET_FAVORITE_ADS_LOADING:
            return {
                ...state,
                ad_list_loading:true
            }
        case GET_FAVORITE_ADS_ERROR:
            return {
                ...state,
                ad_list_error: true,
            }
    }

    return state
};