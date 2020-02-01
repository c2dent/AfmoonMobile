import axios from '../../apiAuth/axios';


export const GET_CATEGORY_FIRST_LIST_SUCCESS = 'GET_CATEGORY_FIRST_LIST_SUCCESS';
export const GET_CATEGORY_SECOND_LIST_SUCCESS = 'GET_CATEGORY_SECOND_LIST_SUCCESS';
export const GET_CATEGORY_THIRD_LIST_SUCCESS = 'GET_CATEGORY_THIRD_LIST_SUCCESS';
export const GET_CATEGORY_FOURTH_LIST_SUCCESS = 'GET_CATEGORY_FOURTH_LIST_SUCCESS';
export const GET_CATEGORY_LIST_LOADING = 'GET_CATEGORY_LIST_LOADING';
export const SET_COUNTER_CATEGORY_LEVEL = 'SET_COUNTER_CATEGORY_LEVEL'

export const setCategoryFirstSucces = (data) => ({
    type: GET_CATEGORY_FIRST_LIST_SUCCESS,
    payload: {data}
});

export const setCategorySecondSucces = (data) => ({
    type: GET_CATEGORY_SECOND_LIST_SUCCESS,
    payload: {data}
});

export const setCategoryThirdSucces = (data) => ({
    type: GET_CATEGORY_THIRD_LIST_SUCCESS,
    payload: {data}
});

export const setCategoryFourthSucces = (data) => ({
    type: GET_CATEGORY_FOURTH_LIST_SUCCESS,
    payload: {data}
});


export const setCategoryLoaded = () => ({
    type: GET_CATEGORY_LIST_LOADING,
    payload: ''
})

export const setCounterCategoryLevel = (level) => ({
    type: SET_COUNTER_CATEGORY_LEVEL,
    payload: level
})

export const getCategory = (level=1,rght, lft) => {
    return (dispatch) => {
        dispatch(setCategoryLoaded())
        return axios.get('api/category/', {
            params: {
                level: level,
                lft: lft,
                rght: rght,
            }
        }).then(response => {
            if (level == 1) {
                dispatch(setCategoryFirstSucces(response.data))
            } else if (level == 2) {
                dispatch(setCategorySecondSucces(response.data))
            } else if (level == 3) {
                dispatch(setCategoryThirdSucces(response.data))
            } else if (level == 4) {
                dispatch(setCategoryFourthSucces(response.data))
            }
        })
        .catch(error => {
            throw error;
        })
    }
}