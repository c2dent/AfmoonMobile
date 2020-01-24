import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet,
        Alert,
        Platform,
        Linking,
        Image
        } from 'react-native';
import { ImageSliderAd } from '../component/ImageSliderAd'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
import Moment from 'moment'



const ChoiceAdditionalInfoForAd = (props) => {
    console.log(props.ad.category)
    if (props.ad.category == 169) {
        return (
            <View style={{flex:1}}>
                <AdAdditonalInfo titleInfo="Этажы в доме" valueInfo={props.ad.floors_in_house} />
                <AdAdditonalInfo titleInfo="Этаж" valueInfo={props.ad.floor} />
                <AdAdditonalInfo titleInfo="Общая площадь" valueInfo={props.ad.total_area} />
                <AdAdditonalInfo titleInfo="Комнаты в квартире" valueInfo={props.ad.number_rooms} />
                <AdAdditonalInfo titleInfo="Тип продажи" valueInfo={props.ad.rent_buy == true?"Купить":"Снять"} />
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
                <AdAdditonalInfo titleInfo="Состояние" valueInfo={props.ad.condition == true?"не битый":"битый"} />
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
                <AdAdditonalInfo titleInfo="Поль" valueInfo={props.ad.second_hand == true?"Мужской":"Жениский"} />
                <AdAdditonalInfo titleInfo="Возраст" valueInfo={props.ad.age} />
            </View>
        )
    } else if (props.ad.category == 148 || props.ad.category == 149
                || props.ad.category == 150 || props.ad.category == 151) {
        return (
            <View>
                <AdAdditonalInfo titleInfo="Состояние" valueInfo={props.ad.second_hand == true?"Новый":"б/у"} />
            </View>
        )
    } else {
        return (
            <></>
        )
    }
}


const AdAdditonalInfo = (props) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop:3,
                marginBottom:3
            }}
        >
            <View
                style={{ flex:1, marginRight:5 }}
            >
                <Text style={{ fontWeight: '300'}}>
                    { props.titleInfo }
                </Text>
            </View>
            <View
                style={{ flex:1, marginLeft:5 }}
            >
                <Text style={{ fontWeight: '600'}}>
                    { props.valueInfo }
                </Text>
            </View>
        </View>
    )
}




const AvatarWithoutPic = (props) => {
    return (
        <View
            style={{
                backgroundColor: 'yellow',
                width:60,
                height:60,
                borderRadius: 30,
                justifyContent:'center',
                alignItems: 'center',
            }}
        >
            <Text style={{fontSize:40}}>
                {props.nickname[0]}
            </Text>
        </View>
    )
}




const AvatarWithPic = (props) => {
    return (
        <View
            style={{
                width:60,
                height:60,
                borderRadius:30,
            }}
        >
            <Image
                resizeMode="contain"
                width={60}
                height={60}
                source={{ uri:'http://192.168.1.6:8000' + props.avatar }}
            />
        </View>
    )
}


export default class AdDetailScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        this.props.getAd(this.props.region_slug, this.props.category_slug, this.props.slug)
    }

    render () {
        const { isLoading, isLoaded, ad } = this.props;
        if (isLoading) return <Text>Пожалуюста подождите</Text>
        if (!isLoaded || !ad) return null;
        return (
            <View style={ styles.adDetailWrap }>
                <ScrollView>
                    <View>



                        <View style={styles.wrapImageSlide}>
                            <ImageSliderAd images={ad.data.images} />
                        </View>
                        <View
                            style={{
                                margin:10
                            }}
                        >
                            <Text style={styles.title}>
                                { ad.data.title }
                            </Text>
                            <Text style={styles.price}>
                                { ad.data.price } M
                            </Text>
                        </View>




                        <View style={styles.wrapButtonCallChat}>
                            <View style={{flex:1, marginRight:5}}>
                                <Button
                                    title='Позвонить'
                                    onPress={() => {
                                        let phoneNumber = ''

                                        if (Platform.OS === 'android') {
                                            phoneNumber = 'tel:${' + ad.data.user_phone + '}'
                                        } else {
                                            phoneNumber = 'telprompt:${' + ad.data.user_phone + '}'
                                        }

                                        Linking.openURL(phoneNumber)
                                    }}
                                    icon={{ name: 'call', color:'white'}}
                                    buttonStyle={{
                                        backgroundColor: '#28a745',
                                        borderRadius:5,
                                        width: '100%'
                                    }}
                                />
                            </View>



                            <View style={{ flex:1, marginLeft:5}}>
                                <Button
                                    title='Написать'
                                    onPress={() => Alert('dfs')}
                                    icon={{name: 'chat', color: 'white'}}
                                    buttonStyle= {{
                                        backgroundColor: '#28a745',
                                        borderRadius: 5,
                                        width: '100%',
                                    }}
                                />
                            </View>
                        </View>



                        <View
                            style={{ display:'flex', flexDirection:'column', margin:10,}}
                        >
                            <AdAdditonalInfo titleInfo="Просмотры" valueInfo={ad.data.views} />
                            <AdAdditonalInfo titleInfo="Размешение" valueInfo={Moment(ad.data.add_date).format('MMMM D, H:mm')} />
                            <AdAdditonalInfo titleInfo="Место" valueInfo={ad.data.region_title} />
                            <AdAdditonalInfo titleInfo="Категория" valueInfo={ad.data.category_title} />
                        </View>




                        <View style={{ margin: 10 }}>
                            <ChoiceAdditionalInfoForAd ad={ad.data} />
                        </View>


                        <View style={{ margin:10, borderBottomWidth: 0.3, borderBottomColor:'#bcb7b7', paddingBottom:25 }}>
                            <Text style={{ fontSize:25 }}>Описания</Text>
                            <Text></Text>
                            <Text>{ad.data.description}</Text>
                        </View>




                        <View style={{margin:20}}>
                            <TouchableHighlight>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        backgroundColor:'white',
                                        borderRadius: 5,
                                        paddingTop:15,
                                        paddingRight:10,
                                        paddingBottom:15,
                                        paddingLeft:10,
                                    }}
                                >
                                    <View style={{ flex:6 }}>
                                        <Text>{ ad.data.user_nickname}</Text>
                                        <Text>{Moment(ad.data.user_register_date).format('MMMM DD YYYY')}</Text>
                                    </View>
                                    <View style={{ flex:2, justifyContent:'center', alignItems:'center' }}>
                                        {ad.data.user_avatar == true?
                                            <AvatarWithPic avatar={ad.data.user_avatar} />:
                                            <AvatarWithoutPic nickname={ad.data.user_nickname} />}
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>




                        <View style={{ margin:10}}>
                            <Button
                                title='Пожаловаться на обявление'
                                buttonStyle={{
                                    backgroundColor: 'red',
                                    width: '100%',
                                    padding: 5
                                }}
                            />
                        </View>



                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    adDetailWrap: {
        flex:1
    },
    wrapImageSlide: {
        height: 250,
        borderBottomColor: '#bcb7b7',
        borderBottomWidth: 0.3,
    },
    title: {
        fontSize: 25
    },
    price: {
        fontSize:20,
        fontWeight: 'bold',
        marginTop:5
    },
    wrapButtonCallChat: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        margin: 10,
    }
})