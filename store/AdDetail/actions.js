import axios from '../../apiAuth/axios';

export const GET_AD_DETAIL_LOAD = 'GET_AD_DETAIL_LOAD'
export const GET_AD_DETAIL_SUCCESS = 'GET_AD_DETAIL_SUCCESS'

export const setAdSucces = (data) => ({
    type: GET_AD_DETAIL_SUCCESS,
    payload: {data}
});

export const setAdLoad = () => ({
    type: GET_AD_DETAIL_LOAD,
    payload: ''
})

export const getAd = (region, category, slug) => {
    return (dispatch) => {
        dispatch(setAdLoad())
        return axios.get('api/' + region + '/' + category + '/' + slug)
            .then(response => {
                dispatch(setAdSucces(response.data))
            })
            .catch(error => {
                throw error;
            })
    }
}
