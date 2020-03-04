import React from 'react'
import { View, Text } from 'react-native'
import AdAdditonalInfo from './AdAdditonalInfo'



export default ChoiceAdditionalInfoForAd = (props) => {
    if (props.ad.category == 169) {
        return (
            <View style={{flex:1}}>
                <AdAdditonalInfo titleInfo="Этажы в доме" valueInfo={props.ad.floors_in_house} />
                <AdAdditonalInfo titleInfo="Этаж" valueInfo={props.ad.floor} />
                <AdAdditonalInfo titleInfo="Общая площадь" valueInfo={props.ad.total_area} />
                <AdAdditonalInfo titleInfo="Комнаты в квартире" valueInfo={props.ad.number_rooms} />
                <AdAdditonalInfo titleInfo="Тип продажи" valueInfo={props.ad.rent_buy ? "Купить" : "Снять"} />
            </View>
        )
    } else if (props.ad.category == 172) {
        return (
            <View style={{flex:1}}>
                <AdAdditonalInfo titleInfo="Марка" valueInfo={props.ad.mark} />
                <AdAdditonalInfo titleInfo="Модел" valueInfo={props.ad.model} />
                <AdAdditonalInfo titleInfo="Год выпуска" valueInfo={props.ad.year_issue} />
                <AdAdditonalInfo titleInfo="Коробка передач" valueInfo={props.ad.gear_shift} />
                <AdAdditonalInfo titleInfo="Тип кузова" valueInfo={props.ad.body_type} />
                <AdAdditonalInfo titleInfo="Пробег" valueInfo={props.ad.mileage} />
                <AdAdditonalInfo titleInfo="Привод" valueInfo={props.ad.drive_unit} />
                <AdAdditonalInfo titleInfo="Состояние" valueInfo={props.ad.condition ? "не битый" : "битый"} />
                <AdAdditonalInfo titleInfo="Тип двигателя" valueInfo={props.ad.engine_type} />
            </View>
        )
    } else if (props.ad.category == 170) {
        return (
            <View>
                <AdAdditonalInfo titleInfo="Площадь дома" valueInfo={props.ad.house_area} />
                <AdAdditonalInfo titleInfo="Площадь участка" valueInfo={props.ad.land_area} />
            </View>
        )
    } else if (props.ad.category == 167) {
        return (
            <View>
                <AdAdditonalInfo titleInfo="График работы" valueInfo={props.ad.schedule} />
                <AdAdditonalInfo titleInfo="Опыть работы" valueInfo={props.ad.work_experience} />
            </View>
        )
    } else if (props.ad.category == 168) {
        return (
            <View>
                <AdAdditonalInfo titleInfo="Поль" valueInfo={props.ad.gender ? "Мужской" : "Жениский"} />
                <AdAdditonalInfo titleInfo="Возраст" valueInfo={props.ad.age} />
                <AdAdditonalInfo titleInfo="График работы" valueInfo={props.ad.schedule} />
                <AdAdditonalInfo titleInfo="Опыть работы" valueInfo={props.ad.work_experience} />
            </View>
        )
    } else if (props.ad.category == 148 || props.ad.category == 149
                || props.ad.category == 150 || props.ad.category == 151) {
        return (
            <View>
                <AdAdditonalInfo titleInfo="Состояние" valueInfo={props.ad.second_hand ? "Новый" : "б/у"} />
            </View>
        )
    } else {
        return (
            <></>
        )
    }
}