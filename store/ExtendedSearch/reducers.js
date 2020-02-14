import {
    SET_CURRENT_CATTEGORY,
    SET_CURRENT_REGION,
    GET_ADS_LOADING,
    GET_ADS_SUCCES,
    SET_PRICE_UP,
    SET_PRICE_FROM,
    SET_HOUSE_AREA_UP,
    SET_HOUSE_AREA_FROM,
    SET_lAND_AREA_UP,
    SET_lAND_AREA_FROM,
    SET_ORDER,
    SET_GENDER,
    SET_AGE_FROM,
    SET_AGE_UP,
    SET_SCHEDULE,
    SET_WORK_EXPERIENCE,

    SET_FLOORS_IN_HOUSE_FROM,
    SET_FLOORS_IN_HOUSE_UP,
    SET_FLOOR_FROM,
    SET_FLOOR_UP,
    SET_TOTAL_AREA_FROM,
    SET_TOTAL_AREA_UP,
    SET_NUMBER_ROOMS,
    SET_RENT_BUY,

    SET_GEAR_SHIFT,
    SET_BODY_TYPE,
    SET_DRIVE_UNIT,
    SET_ENGINE_TYPE,
    SET_MARK
} from './actions'

const defaultState = {
    isLoading: false,
    isLoaded: false,
    ads: '',
    searchText:'',
    currentCategory: '' ,
    currentRegion: {
        "title": "Туркменистан",
        "slug": "turkmenistan",
        "lft": 0,
        "rght": 401,
        "id":1,
    },
    priceFrom: '',
    priceUp: '',
    order: 0,
    gender: '',
    ageFrom: '',
    ageUp: '',
    schedule:'',
    workExperience: '',
    houseAreaFrom: '',
    houseAreaUp: '',
    landAreaFrom: '',
    landAreaUp: '',


    floorsInHouseFrom: '',
    floorsInHouseUp:'',
    floorFrom: '',
    floorUp: '',
    numberRooms: '',
    totalAreaFrom: '',
    totalAreaUp: '',
    rentBuy: '',


    gearShift:'',
    bodyType: '',
    driveUnit:'',
    engineType:'',
    mark: '',
}

export const extendedSearchReducer = (state=defaultState, action) => {

    switch(action.type) {
        case SET_CURRENT_CATTEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        case SET_PRICE_FROM:
            return {
                ...state,
                priceFrom: action.payload
            }
        case SET_PRICE_UP:
            return {
                ...state,
                priceUp: action.payload
            }
        case SET_HOUSE_AREA_FROM:
            return {
                ...state,
                houseAreaFrom: action.payload
            }
        case SET_HOUSE_AREA_UP:
            return {
                ...state,
                houseAreaUp: action.payload
            }
        case SET_lAND_AREA_FROM:
            return {
                ...state,
                landAreaFrom: action.payload
            }
        case SET_lAND_AREA_UP:
            return {
                ...state,
                landAreaUp: action.payload
            }



        case SET_FLOORS_IN_HOUSE_FROM:
            return {
                ...state,
                floorsInHouseFrom: action.payload
            }
        case SET_FLOORS_IN_HOUSE_UP:
            return {
                ...state,
                floorsInHouseUp: action.payload
            }
        case SET_FLOOR_FROM:
            return {
                ...state,
                floorFrom: action.payload
            }
        case SET_FLOOR_UP:
            return {
                ...state,
                floorUp: action.payload
            }
        case SET_TOTAL_AREA_FROM:
            return {
                ...state,
                totalAreaFrom: action.payload
            }
        case SET_TOTAL_AREA_UP:
            return {
                ...state,
                totalAreaUp: action.payload
            }
        case SET_NUMBER_ROOMS:
            return {
                ...state,
                numberRooms: action.payload
            }
        case SET_RENT_BUY:
            return {
                ...state,
                rentBuy: action.payload
            }




        case SET_CURRENT_REGION:
            return {
                ...state,
                currentRegion: action.payload
            }
        case GET_ADS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case GET_ADS_SUCCES:
            return {
                ...state,
                isLoading:false,
                isLoaded:true,
                ads: action.payload
            }
        case SET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case SET_GENDER:
            return {
                ...state,
                gender: action.payload
            }
        case SET_AGE_FROM:
            return {
                ...state,
                ageFrom: action.payload
            }
        case SET_AGE_UP:
            return {
                ...state,
                ageUp: action.payload
            }
        case SET_SCHEDULE:
            return {
                ...state,
                schedule: action.payload
            }
        case SET_WORK_EXPERIENCE:
            return {
                ...state,
                workExperience: action.payload
            }


        case SET_GEAR_SHIFT:
            return {
                ...state,
                gearShift: action.payload
            }
        case SET_BODY_TYPE:
            return {
                ...state,
                bodyType: action.payload
            }
        case SET_DRIVE_UNIT:
            return {
                ...state,
                driveUnit: action.payload
            }
        case SET_ENGINE_TYPE:
            return {
                ...state,
                engineType: action.payload
            }
        case SET_MARK:
            return {
                ...state,
                mark: action.payload
            }
    }

    return state;
}