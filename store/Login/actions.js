import axios from '../../apiAuth/axios';
import { AsyncStorage } from 'react-native';

export const SET_OTP_KEY = 'SET_OTP_KEY'



export const setOtpKey = (data) => ({
    type: SET_OTP_KEY,
    payload: data
})




setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token)
    } catch (error) {
        console.log(error)
    }
}

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


export const setConfirmPhoneNumber = (phoneNumber, otp, otp_key) => {
    return () => {
        return axios.post('api/accounts/confirm-phone/', {
            'phone_number': phoneNumber,
            'otp': otp,
            'otp_key': otp_key,
        }).then(response => {
            if (response.data.token) {
                setToken(response.data.token)
            }

            return response.data
        })
    }
}