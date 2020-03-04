import {
    SET_PROFILE_LOADING,
    SET_PROFILE,
    SET_PROFILE_ERROR,
    SET_USER_ADS,
    SET_USER_ADS_ERROR,
    SET_USER_ADS_LOADING,
} from './actions'

const defaultState = {
    profile: '',
    profileLoading: false,
    profileSucces: false,
    profileError: false,
    userAds: {},
    userAdsLoading: false,
    userAdsError: false,
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
    }

    return state
}