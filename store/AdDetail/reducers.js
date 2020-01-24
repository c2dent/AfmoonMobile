import {
    GET_AD_DETAIL_LOAD,
    GET_AD_DETAIL_SUCCESS
} from './actions'

const defaultState = {
    isLoading: false,
    isLoaded: false,
    ad : ''
}

export const adDetailReducer = (state=defaultState, action) => {
    switch (action.type) {
        case GET_AD_DETAIL_LOAD:
            return {
                ...state,
                isLoading: true,
            }
        case GET_AD_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                ad: action.payload
            }
    }

    return state
};