import {
    SET_PROFILE_LOADING,
    SET_PROFILE,
    SET_PROFILE_ERROR,
    SET_USER_ADS,
    SET_USER_ADS_ERROR,
    SET_USER_ADS_LOADING,
    ADD_REMOVE_FAVORITE_LOADED,
    ADD_REMOVE_FAVORITE_LOADING,
    GET_USER_AD_DETAIL,
    GET_USER_AD_DETAIL_ERROR,
    GET_USER_AD_DETAIL_ERROR_204,
} from './actions'

const defaultState = {
    profile: '',
    profileLoading: false,
    profileSucces: false,
    profileError: false,
    userAds: {},
    userAdsLoading: false,
    userAdsError: false,
    addRemoveFavorite: false,
    UserAdDetail: {},
    UserAdDetailLoad: true,
}

export const profileReducer = (state=defaultState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                profileSucces: true,
                profileLoading: false,
            }
        case SET_PROFILE_LOADING:
            return {
                ...state,
                profileLoading: true
            }
        case SET_PROFILE_ERROR:
            return {
                ...state,
                profileError: true,
                profileLoading: false
            }
        case SET_USER_ADS_ERROR:
            return {
                ...state,
                userAdsError: true,
                userAdsLoading: false,
            }
        case SET_USER_ADS:
            return {
                ...state,
                userAds: action.payload,
                userAdsLoading: false,
            }
        case SET_USER_ADS_LOADING:
            return {
                ...state,
                userAdsLoading: true
            }
        case ADD_REMOVE_FAVORITE_LOADING:
            return {
                ...state,
                addRemoveFavorite: true
            }
        case ADD_REMOVE_FAVORITE_LOADED:
            return {
                ...state,
                addRemoveFavorite: false
            }
        case GET_USER_AD_DETAIL_ERROR:
            return {
                ...state,
                UserAdDetailLoad: false
            }
        case GET_USER_AD_DETAIL_ERROR_204:
            return {
                ...state,
                UserAdDetail: 204,
                UserAdDetailLoad: false,
            }
        case GET_USER_AD_DETAIL:
            return {
                ...state,
                UserAdDetail: action.payload,
                UserAdDetailLoad:false,
            }
    }

    return state
}