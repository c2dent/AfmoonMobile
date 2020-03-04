import axios from '../../apiAuth/axios';

export const SET_PROFILE_LOADING = 'SET_PROFILE_LOADING'
export const SET_PROFILE = 'SET_PROFILE'
export const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR'
export const SET_USER_ADS = 'SET_USER_ADS'
export const SET_USER_ADS_LOADING = 'SET_USER_ADS_LOADING'
export const SET_USER_ADS_ERROR = 'SET_USER_ADS_ERROR'


export const setProfile = (data) => ({
    type: SET_PROFILE,
    payload: data
})

export const setProfileLoading = () => ({
    type: SET_PROFILE_LOADING,
    payload: ''
})


export const setProfileError = () => ({
    type: SET_PROFILE_ERROR,
    payload: ''
})

export const setUserAds = (data) => ({
    type: SET_USER_ADS,
    payload: data
})

export const setUserAdsLoading = () => ({
    type: SET_USER_ADS_LOADING,
    payload: ''
})

export const setUserAdsError = () => ({
    type: SET_USER_ADS_ERROR,
    payload: ''
})



export const setPhoneNumber = (phoneNumber) => {
    return (dispatch) => {
        return axios.post('api/accounts/send-sms/', {
            'phone_number': phoneNumber
        }).then(response => {
            if (response.data.Status == 'Success') {
                dispatch(setOtpKey(response.data.Details))
            }

            return response.data.Status
        })
    }
}

export const getProfile = () => {
    return (dispatch) => {
        dispatch(setProfileLoading())
        return axios.get('api/accounts/profile/')
            .then((response) => {
                if (response.status == '200') {
                    dispatch(setProfile(response.data))
                } else {
                    dispatch(setProfileError())
                }
            })
    }
}

export const getUserAds = () => {
    return (dispatch) => {
        dispatch(setUserAdsLoading())
        return axios.get('api/user-ads/')
            .then((response) =>{
                if (response.status == '200') {
                    dispatch(setUserAds(response.data))
                } else {
                    dispatch(setUserAdsError())
                }
            })
    }
}