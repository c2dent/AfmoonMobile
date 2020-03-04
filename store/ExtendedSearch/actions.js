import axios from '../../apiAuth/axios';

export const SET_CURRENT_CATTEGORY = 'SET_CURRENT_CATTEGORY'
export const SET_CURRENT_REGION = 'SET_CURRENT_REGION'
export const GET_ADS_SUCCES = 'GET_ADS_SUCCES'
export const GET_ADS_LOADING = 'GET_ADS_LOADING'
export const SET_PRICE_FROM = 'SET_PRICE_FROM'
export const SET_PRICE_UP = 'SET_PRICE_UP'
export const SET_HOUSE_AREA_FROM = 'SET_HOUSE_AREA_FROM'
export const SET_HOUSE_AREA_UP = 'SET_HOUSE_AREA_UP'
export const SET_LAND_AREA_FROM = 'SET_LAND_AREA_FROM'
export const SET_LAND_AREA_UP = 'SET_LAND_AREA_UP'
export const SET_ORDER = 'SET_ORDER'
export const SET_GENDER = 'SET_GENDER'
export const SET_AGE_FROM = 'SET_AGE_FROM'
export const SET_AGE_UP = 'SET_AGE_UP'
export const SET_SCHEDULE = 'SET_SCHEDULE'
export const SET_WORK_EXPERIENCE = 'SET_WORK_EXPERIENCE'

export const SET_FLOORS_IN_HOUSE_FROM = 'SET_FLOORS_IN_HOUSE_FROM'
export const SET_FLOORS_IN_HOUSE_UP = 'SET_FLOORS_IN_HOUSE_UP'
export const SET_FLOOR_FROM = 'SET_FLOOR_FROM'
export const SET_FLOOR_UP = 'SET_FLOOR_UP'
export const SET_TOTAL_AREA_FROM = 'SET_TOTAL_AREA_FROM'
export const SET_TOTAL_AREA_UP = 'SET_TOTAL_AREA_UP'
export const SET_NUMBER_ROOMS = 'SET_NUMBER_ROOMS'
export const SET_RENT_BUY = 'SET_RENT_BUY'

export const SET_GEAR_SHIFT = 'SET_GEAR_SHIFT'
export const SET_BODY_TYPE = 'SET_BODY_TYPE'
export const SET_DRIVE_UNIT = 'SET_DRIVE_UNIT'
export const SET_ENGINE_TYPE = 'SET_ENGINE_TYPE'
export const SET_MARK = 'SET_MARK'
export const SET_MODEL = 'SET_MODEL'
export const SET_YEAR_ISSUE_FROM = 'SET_YEAR_ISSUE_FROM'
export const SET_YEAR_ISSUE_UP = 'SET_YEAR_ISSUE_UP'
export const SET_MILEAGE_FROM = 'SET_MILEAGE_FROM'
export const SET_MILEAGE_UP = 'SET_MILEAGE_UP'
export const SET_CONDITION = 'SET_CONDITION'



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

export const setAgeFrom = (age) => ({
    type: SET_AGE_FROM,
    payload: age
})

export const setAgeUp = (age) => ({
    type: SET_AGE_UP,
    payload: age
})

export const setHouseAreaFrom = (houseAreaFrom) => ({
    type: SET_HOUSE_AREA_FROM,
    payload: houseAreaFrom
})


export const setHouseAreaUp = (houseAreaUp) => ({
    type: SET_HOUSE_AREA_UP,
    payload: houseAreaUp
})


export const setLandAreaFrom = (landAreaFrom) => ({
    type: SET_LAND_AREA_FROM,
    payload: landAreaFrom
})


export const setLandAreaUp = (landAreaUp) => ({
    type: SET_LAND_AREA_UP,
    payload: landAreaUp
})


export const setOrder = (order) => ({
    type: SET_ORDER,
    payload: order
})

export const setGender = (gender) => ({
    type: SET_GENDER,
    payload: gender
})

export const setSchedule = (schedule) => ({
    type: SET_SCHEDULE,
    payload: schedule
})

export const setWorkExperience = (workExperience) => ({
    type: SET_WORK_EXPERIENCE,
    payload: workExperience
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




export const setFloorsInHouseFrom = (data) => ({
    type: SET_FLOORS_IN_HOUSE_FROM,
    payload: data
})

export const setFloorsInHouseUp = (data) => ({
    type: SET_FLOORS_IN_HOUSE_UP,
    payload: data
})

export const setFloorFrom= (data) => ({
    type: SET_FLOOR_FROM,
    payload: data
})

export const setFloorUp = (data) => ({
    type: SET_FLOOR_UP,
    payload: data
})

export const setTotalAreaFrom = (data) => ({
    type: SET_TOTAL_AREA_FROM,
    payload: data
})

export const setTotalAreaUp = (data) => ({
    type: SET_TOTAL_AREA_UP,
    payload: data
})

export const setNumberRooms = (data) => ({
    type: SET_NUMBER_ROOMS,
    payload: data
})

export const setRentBuy = (data) => ({
    type: SET_RENT_BUY,
    payload: data
})

export const setGearShift = (data) => ({
    type: SET_GEAR_SHIFT,
    payload: data
})

export const setBodyType = (data) => ({
    type: SET_BODY_TYPE,
    payload: data
})

export const setDriveUnit = (data) => ({
    type: SET_DRIVE_UNIT,
    payload:data
})

export const setEngineType = (data) => ({
    type: SET_ENGINE_TYPE,
    payload: data
})

export const setMark = (data) => ({
    type: SET_MARK,
    payload:data
})

export const setModel = (data) => ({
    type: SET_MODEL,
    payload:data
})

export const setYearIssueFrom = (data) => ({
    type: SET_YEAR_ISSUE_FROM,
    payload:data
})

export const setYearIssueUp = (data) => ({
    type: SET_YEAR_ISSUE_UP,
    payload: data
})

export const setMileageFrom = (data) => ({
    type: SET_MILEAGE_FROM,
    payload: data
})

export const setMileageUp = (data) => ({
    type: SET_MILEAGE_UP,
    payload: data
})

export const setCondition = (data) => ({
    type: SET_CONDITION,
    payload: data
})



export const getAds = (category, region, priceFrom, priceUp, order, adParam1, adParam2, adParam3, adParam4, adParam5, adParam6, adParam7, adParam8, adParam9) => {
    const params ={}
    if (category.id == 168) {
        if (priceFrom) { params.priceFrom = priceFrom }
        if (priceUp) { params.priceUp = priceUp }
        if (order) { params.order = order }
        if (adParam1) {params.gender = adParam1 }
        if (adParam2) {params.ageFrom = adParam2}
        if (adParam3) {params.ageUp = adParam3}
        if (adParam4) {params.schedule = adParam4}
        if (adParam5) {params.workExperience = adParam5}
    } else if (category.id == 167) {
        if (priceFrom) { params.priceFrom = priceFrom }
        if (priceUp) { params.priceUp = priceUp }
        if (order) { params.order = order }
        if (adParam1) {params.schedule = adParam1}
        if (adParam2) {params.workExperience = adParam2}
    } else if (category.id == 170) {
        if (priceFrom) { params.priceFrom = priceFrom }
        if (priceUp) { params.priceUp = priceUp }
        if (order) { params.order = order }
        if (adParam1) {params.houseAreaFrom = adParam1}
        if (adParam2) {params.houseAreaUp = adParam2}
        if (adParam3) {params.landAreaFrom = adParam3}
        if (adParam4) {params.landAreaUp = adParam4}
    } else if (category.id == 169) {
        if (priceFrom) { params.priceFrom = priceFrom }
        if (priceUp) { params.priceUp = priceUp }
        if (order) { params.order = order }
        if (adParam1) {params.floorsInHouseFrom = adParam1}
        if (adParam2) {params.floorsInHouseUp = adParam2}
        if (adParam3) {params.floorFrom = adParam3}
        if (adParam4) {params.floorUp = adParam4}
        if (adParam5) {params.totalAreaFrom = adParam5}
        if (adParam6) {params.totalAreaUp = adParam6}
        if (adParam7) {params.numberRooms = adParam7}
        if (adParam8) {params.rentBuy = adParam8}
    } else {
        if (priceFrom) { params.priceFrom = priceFrom }
        if (priceUp) { params.priceUp = priceUp }
        if (order) { params.order = order }
    }
    return (dispatch) => {
        dispatch(setAdsLoading())
        return axios.get('api/' + region +'/' + category.slug + '/', {params})
            .then(response => {
                dispatch(setAdsSucces(response.data))
            })
            .catch(error => {
                throw error;
            })
    }
}