import React from 'react'
import { View, Text } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Moment from 'moment'
import moment from 'moment'
import { Ionicons } from '@expo/vector-icons'



let ruLocale = require('moment/locale/ru');
moment.updateLocale('ru', ruLocale);


class IconFeatured extends React.Component {
    render () {
        return (
            <View style={{
                position: 'absolute',
                right:6,
                top:1,
                width:25,
                height:25,
                justifyContent:'center',
                alignItems: 'center',
                zIndex: 3 }}>
                <View>
                    <Ionicons name={'ios-heart'} size={25} color={'white'} />
                </View>
            </View>
        )
    }
}


const renderTitle = (category, title) => {
    let titleList = title.split(',')
    if (category == 'kvartiry') {
        return titleList[0] == 11 ? 'Студия, ' + titleList[1] + 'м' + '\u00B2' : titleList[0] + '-к квартира, ' + titleList[1] +' м' + '\u00B2'
    }
    else if (category == 'doma-dachi-kottedzhi') {
        return 'Дом, ' + title + 'м' + '\u00B2'
    }
    else if (category == 'zemelnye-uchastki') {
        return 'земельный участок, ' + title + 'м' + '\u00B2'
    }
    else {
        return title
    }
}


const AdGeneral = (data) => {
    return (
        <View style={styles.wrapAdGeneral}>
            <View style={ styles.leftItem }>
                <IconFeatured />
                {
                    data.image.length > 0 ?
                    <Image
                        style={{ height:120, width: 151,}}
                        source={{uri: 'http://192.168.1.6:8000' + data.image[0].image}}
                        resizeMode = "cover"
                        borderTopLeftRadius={5}
                        borderBottomLeftRadius={5}
                    /> :
                    <Image
                        style={{ height:120, width: 151,}}
                        source={require('../static/images/img.png')}
                        resizeMode = "cover"
                        borderTopLeftRadius={5}
                        borderBottomLeftRadius={5}
                    />
                }
            </View>
            <View style={ styles.rightItem }>
                <View style={ styles.adGeneralInfo }>
                    <Text>{ renderTitle(data.category_slug, data.title) }</Text>
                    <Text style={ styles.adPrice }>{ data.price } M</Text>
                    <Text style={{ color: '#949496', fontSize:15 }}>{ data.region_title }</Text>
                </View>
                <View style={ styles.adPublicDate }>
                    <Text style={{ color: '#949496', fontSize:15 }}>{Moment(data.add_date).format('MMMM D, H:mm')}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapAdGeneral: {
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 5,
        padding:0,
        borderRadius:5
    },
    leftItem: {
        flex: 9,
        padding:0,
        margin:0,
        backgroundColor: '#e8e5e5'
    },
    rightItem: {
        flex:11,
        paddingTop: 3,
        paddingBottom: 10,
        paddingLeft:5,
    },
    adGeneralInfo: {
        flex:7
    },
    adPublicDate:{
        flex:2,
    },
    adPrice: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default AdGeneral;
