import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet,
        Alert,
        Platform,
        Linking,
        Image,
        ActivityIndicator
        } from 'react-native';
import { ImageSliderAd } from '../component/ImageSliderAd'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
import Moment from 'moment'
import ChoiceAdditionalInfoForAd from '../component/ChoiceAdditionalInfoForAd'
import AdAdditonalInfo from '../component/AdAdditonalInfo'




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
                {props.nickname ? props.nickname[0] : 'A'}
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
            isHideSliderImage: true,
        }
    }

    render () {
        const { isLoading, ad } = this.props;
        if (isLoading) return <View style={{ justifyContent: 'center', alignItems: 'center', flex:1 }}><ActivityIndicator size="small" color="#00ff00" /></View>
        if (!ad.data.images) { this.state.isHideSliderImage = false }
        return (
            <View style={ styles.adDetailWrap }>
                <ScrollView>
                    <View>

                        {this.state.isHideSliderImage == true?
                            <View style={styles.wrapImageSlide} hidden={this.state.isHideSliderImage} >
                                <ImageSliderAd images={ad.data.images} />
                            </View>:<></>
                        }
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
                                        {
                                            ad.data.user_avatar == true?
                                                <AvatarWithPic avatar={ad.data.user_avatar} />:
                                                <AvatarWithoutPic nickname={ad.data.user_nickname} />
                                        }
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