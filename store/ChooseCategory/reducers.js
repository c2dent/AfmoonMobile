import {
    GET_CATEGORY_LIST_LOADING,
    SET_COUNTER_CATEGORY_LEVEL,
    GET_CATEGORY_FIRST_LIST_SUCCESS,
    GET_CATEGORY_SECOND_LIST_SUCCESS,
    GET_CATEGORY_THIRD_LIST_SUCCESS,
    GET_CATEGORY_FOURTH_LIST_SUCCESS,
} from './actions'



const defaultState = {
    isLoading: false,
    isLoaded: false,
    categoryLevelFirst : '',
    categoryLevelSecond : '',
    categoryLevelTird : '',
    categoryLevelFourth : '',
}

export const chooseCategoryReducer = (state=defaultState, action) => {
    switch (action.type) {
        case GET_CATEGORY_LIST_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_CATEGORY_FIRST_LIST_SUCCESS:
            return {
                ...state,
                categoryLevelFirst: action.payload,
                isLoaded: true,
                isLoading: false,
            }
        case GET_CATEGORY_SECOND_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                categoryLevelSecond: action.payload
            }
        case GET_CATEGORY_THIRD_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                categoryLevelTird: action.payload
            }
        case GET_CATEGORY_FOURTH_LIST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                categoryLevelFourth: action.payload
            }
        case SET_COUNTER_CATEGORY_LEVEL:
            return {
                ...state,
                level: action.payload
            }
    }

    return state
}