import {
    SET_SCHEDULE_GENERAL,
    SET_SCHEDULE_LOADING,
    SET_WORK_EXPERIENCE_GENERAL,
    SET_NUMBER_ROOMS,
    SET_GEAR_SHIFT,
    SET_BODY_TYPE,
    SET_DRIVE_UNIT,
    SET_ENGINE_TYPE,
    SET_MARK
} from './actions'

const defaultState = {
    isLoading: false,
    isLoaded: false,
    scheduleGeneral: '',
    workExperienceGeneral: '',
    numberRoomsGeneral: '',
    gearShiftGeneral:'',
    bodyTypeGeneral:'',
    driveUnitGeneral:'',
    engineTypeGeneral:'',
    markGeneral:'',
}

export const generalReducer = (state=defaultState, action) => {

    switch (action.type) {
        case SET_SCHEDULE_GENERAL:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                scheduleGeneral: action.payload
            }
        case SET_SCHEDULE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case SET_WORK_EXPERIENCE_GENERAL:
            return {
                ...state,
                workExperienceGeneral:action.payload
            }
        case SET_NUMBER_ROOMS:
            return {
                ...state,
                numberRoomsGeneral: action.payload
            }
        case SET_GEAR_SHIFT:
            return {
                ...state,
                gearShiftGeneral: action.payload
            }
        case SET_BODY_TYPE:
            return {
                ...state,
                bodyTypeGeneral: action.payload
            }
        case SET_DRIVE_UNIT:
            return {
                ...state,
                driveUnitGeneral: action.payload
            }
        case SET_ENGINE_TYPE:
            return {
                ...state,
                engineTypeGeneral: action.payload
            }
        case SET_MARK:
            return {
                ...state,
                markGeneral: action.payload
            }
    }

    return state;
}