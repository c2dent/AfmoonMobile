import {
    SET_CALL_CHOOSE_CATEGORY,
} from './actions'

const defaultState = {
    screenWichCallChooseCategory: 'NOt',
    searchText:'',
    currentCategory: '',
    currentRegion: '',
    priceFrom: '',
    priceBefore: '',
}

export const extendedSearchReducer = (state=defaultState, action) => {

    switch(action.type) {
        case SET_CALL_CHOOSE_CATEGORY:
            return {
                ...state,
                screenWichCallChooseCategory: action.payload
            }
    }

    return state;
}