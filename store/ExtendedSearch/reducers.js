import {
    SET_CURRENT_CATTEGORY,
    SET_CURRENT_REGION,
    GET_ADS_LOADING,
    GET_ADS_SUCCES
} from './actions'

const defaultState = {
    isLoading: false,
    isLoaded: false,
    ads: '',
    searchText:'',
    currentCategory: '',
    currentRegion: {
        "title": "Туркменистан",
        "slug": "turkmenistan",
        "lft": 0,
        "rght": 401,
    },
    priceFrom: '',
    priceUp: '',
}

export const extendedSearchReducer = (state=defaultState, action) => {

    switch(action.type) {
        case SET_CURRENT_CATTEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case SET_CURRENT_REGION:
            return {
                ...state,
                currentRegion: action.payload
            }
        case GET_ADS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_ADS_SUCCES:
            return {
                ...state,
                isLoading:false,
                isLoaded:true,
                ads: action.payload
            }
    }

    return state;
}