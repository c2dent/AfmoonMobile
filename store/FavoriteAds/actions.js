import axios from '../../apiAuth/axios';

export const GET_FAVORITE_AD_DETAIL_LOAD = 'GET_FAVORITE_AD_DETAIL_LOAD'
export const GET_FAVORITE_AD_DETAIL_SUCCESS = 'GET_FAVORITE_AD_DETAIL_SUCCESS'
export const GET_FAVORITE_ADS = 'GET_FAVORITE_ADS'
export const GET_FAVORITE_ADS_LOADING = 'GET_FAVORITE_ADS_LOADING'
export const GET_FAVORITE_ADS_ERROR = 'GET_FAVORITE_ADS_ERROR'


export const setAdSucces = (data) => ({
    type: GET_FAVORITE_AD_DETAIL_SUCCESS,
    payload: {data}
});

export const setAdLoad = () => ({
    type: GET_FAVORITE_AD_DETAIL_LOAD,
    payload: ''
})

export const setUserFavorites = (data) => ({
    type: GET_FAVORITE_ADS,
    payload: {data}
})


export const setUserFavoritesLoading = () => ({
    type: GET_FAVORITE_ADS_LOADING,
    payload: ''
})


export const setUserFavoritesError = () => ({
    type: GET_FAVORITE_ADS_ERROR,
    payload: ''
})


export const getFavoriteAd = (region, category, slug) => {
    return (dispatch) => {
        dispatch(setAdLoad())
        return axios.get('api/' + region + '/' + category + '/' + slug + '/')
            .then(response => {
                dispatch(setAdSucces(response.data))
                return response
            })
            .catch(error => {
                throw error;
            })
    }
}


export const uploadFavoriteAd = (region, category, slug) => {
    return (dispatch) => {
        return axios.get('api/' + region + '/' + category + '/' + slug + '/')
            .then(response => {
                dispatch(setAdSucces(response.data))
            })
            .catch(error => {
                throw error;
            })
    }
}


export const getUserFavorites = () => {
    return (dispatch) => {
        dispatch(setUserFavoritesLoading())
        return axios.get('api/accounts/user-favorites/')
            .then(response => {
                if (response.status == 200) {
                    dispatch(setUserFavorites(response.data))
                } else {
                    dispatch(setUserFavoritesError())
                }
            })
    }
}