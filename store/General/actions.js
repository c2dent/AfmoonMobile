import axios from '../../apiAuth/axios';

export const SET_SCHEDULE_GENERAL = 'SET_SCHEDULE_GENERAL'
export const SET_SCHEDULE_LOADING = 'SET_SCHEDULE_LOADING'
export const SET_WORK_EXPERIENCE_GENERAL = 'SET_WORK_EXPERIENCE_GENERAL'
export const SET_NUMBER_ROOMS = 'NUMBER_ROOMS'
export const SET_GEAR_SHIFT = 'SET_GEAR_SHIFT'
export const SET_BODY_TYPE = 'SET_BODY_TYPE'
export const SET_DRIVE_UNIT = 'SET_DRIVE_UNIT'
export const SET_ENGINE_TYPE = 'SET_ENGINE_TYPE'
export const SET_MARK = 'SET_MARK'
export const IS_AUTHENTICATION = 'IS_AUTHENTICATION'


export const setScheduleGeneral = (data) => ({
    type: SET_SCHEDULE_GENERAL,
    payload: {data}
})

export const setWorkExperienceGeneral = (data) => ({
    type: SET_WORK_EXPERIENCE_GENERAL,
    payload: {data}
})

export const setNumberRoomsGeneral = (data) => ({
    type: SET_NUMBER_ROOMS,
    payload: {data}
})

export const setGearShift = (data) => ({
    type: SET_GEAR_SHIFT,
    payload:{data}
})

export const setBodyType = (data) => ({
    type: SET_BODY_TYPE,
    payload:{data}
})

export const setDriveUnit = (data) => ({
    type: SET_DRIVE_UNIT,
    payload:{data}
})

export const setEngineType = (data) => ({
    type: SET_ENGINE_TYPE,
    payload:{data}
})

export const setMark = (data) => ({
    type: SET_MARK,
    payload:{data}
})

export const setScheduleLoading = () => ({
    type: SET_SCHEDULE_LOADING,
    payload: ''
})

export const setIsAuth = () => ({
    type: IS_AUTHENTICATION,
    payload: ''
})

export const getSchedule = () => {
    return (dispatch) => {
        dispatch(setScheduleLoading())
        return axios.get('api/choices/', {
            params: {
                choices: 'SCHEDULE'
            }
        }).then(response => {
            dispatch(setScheduleGeneral(response.data))
        })
    }
}


export const getWorkExperience = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'WORK_EXPERIENCE'
            }
        }).then(response => {
            dispatch(setWorkExperienceGeneral(response.data))
        })
    }
}

export const getNumberRooms = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'NUMBER_ROOMS'
            }
        }).then(response => {
            dispatch(setNumberRoomsGeneral(response.data))
        })
    }
}

export const getGearShift = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'GEAR_SHIFT'
            }
        }).then(response => {
            dispatch(setGearShift(response.data))
        })
    }
}

export const getBodyType = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'BODY_TYPE'
            }
        }).then(response => {
            dispatch(setBodyType(response.data))
        })
    }
}

export const getEngineType = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'ENGINE_TYPE'
            }
        }).then(response => {
            dispatch(setEngineType(response.data))
        })
    }
}

export const getDriveUnit = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'DRIVE_UNIT'
            }
        }).then(response => {
            dispatch(setDriveUnit(response.data))
        })
    }
}


export const getMark = () => {
    return (dispatch) => {
        return axios.get('api/choices/', {
            params: {
                choices: 'MARK'
            }
        }).then(response => {
            dispatch(setMark(response.data))
        })
    }
}