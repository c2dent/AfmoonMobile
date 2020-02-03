import axios from '../../apiAuth/axios';

export const SET_CURRENT_CATTEGORY = 'SET_CURRENT_CATTEGORY'
export const SET_CURRENT_REGION = 'SET_CURRENT_REGION'
export const GET_ADS_SUCCES = 'GET_ADS_SUCCES'
export const GET_ADS_LOADING = 'GET_ADS_LOADING'
export const SET_PRICE_FROM = 'SET_PRICE_FROM'
export const SET_PRICE_UP = 'SET_PRICE_UP'


export const setAdsLoading = () => ({
    type: GET_ADS_LOADING,
    payload: ''
})

export const setPriceFrom = (price) => ({
    type: SET_PRICE_FROM,
    payload: price
})

export const setPriceUp = (price) => ({
    type: SET_PRICE_UP,
    payload: price
})

export const setAdsSucces = (data) => ({
    type: GET_ADS_SUCCES,
    payload: {data}
});

export const setCurrentCategory = (category) => ({
    type: SET_CURRENT_CATTEGORY,
    payload: category
})

export const setCurrentRegion = (region) => ({
    type: SET_CURRENT_REGION,
    payload: region
})

export const getAds = (category, region) => {
    return (dispatch) => {
        dispatch(setAdsLoading())
        return axios.get('api/' + region +'/' + category + '/')
            .then(response => {
                dispatch(setAdsSucces(response.data))
            })
            .catch(error => {
                throw error;
            })
    }
}