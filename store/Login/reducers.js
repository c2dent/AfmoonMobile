import {
    SET_OTP_KEY
} from './actions'

const defaultState = {
    otpKey : '',
}

export const loginReducer = (state=defaultState, action) => {

    switch (action.type) {
        case SET_OTP_KEY:
            return {
                ...state,
                otpKey: action.payload
            }
    }

    return state
}