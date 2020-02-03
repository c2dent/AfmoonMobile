import axios from '../../apiAuth/axios';
export const GET_AD_LIST = "GET_AD_LIST";
export const LOAD_MORE_AD_LIST = 'LOAD_MORE_AD_LIST';
export const SET_SEACH_TEXT = 'SET_SEACH_TEXT';
export const MAX_PAGE_TO_TRUE = 'MAX_PAGE_TO_TRUE'
export const SET_CATEGORY_SUCCES = 'SET_CATEGORY_SUCCES'
export const SET_REGION_SUCCES = 'SET_REGION_SUCCES'


export const setAdsSucces = (data) => ({
    type: GET_AD_LIST,
    payload: {data}
});

export const setCategorySucces = (data) => ({
    type: SET_CATEGORY_SUCCES,
    payload: {data}
})

export const setRegionSucces = (data) => ({
    type: SET_REGION_SUCCES,
    payload: {data}
})

export const loadMoreAdsSucces = (data) => ({
    type: LOAD_MORE_AD_LIST,
    payload: {data}
});

export const setSearchText = (value) => ({
    type: SET_SEACH_TEXT,
    payload: value
})

export const setMaxPageTrue = () => ({
    type: MAX_PAGE_TO_TRUE,
    payload: true,
})

export const loadMoreAds = (page) => {
    return (dispatch) => {
        return axios.get('api/turkmenistan/', {
            params: {
                page: page
            }
        })
            .then(response => {
                if (response.data){
                    dispatch(loadMoreAdsSucces(response.data))
                } else {
                    dispatch(setMaxPageTrue())
                }
            })
            .catch(error => {
                throw error;
            })
    }
}

export const getAds = () => {
    return (dispatch) => {
        return axios.get('api/turkmenistan/')
            .then(response => {
                dispatch(setAdsSucces(response.data))
            })
            .catch(error => {
                throw error;
            })
    }
}

export const getAllCategory = () => {
    return (dispatch) => {
        return axios.get('api/category/')
            .then(response => {
                dispatch(setCategorySucces(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}

export const getAllRegion = () => {
    return (dispatch) => {
        return axios.get('api/region/')
            .then(response => {
                dispatch(setRegionSucces(response.data))
            })
            .catch(error => {
                throw error
            })
    }
}