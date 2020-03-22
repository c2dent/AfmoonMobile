import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet,
        Alert,
        Platform,
        Image,
        ActivityIndicator
        } from 'react-native';
import { ImageSliderAd } from '../ImageSliderAd'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
import Moment from 'moment'
import ChoiceAdditionalInfoForAd from '../ChoiceAdditionalInfoForAd'
import AdAdditonalInfo from '../AdAdditonalInfo'
import { getUserAd } from '../../store/Profile/actions'
import { connect } from 'react-redux'


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


class UserAdDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isHideSliderImage: true,
        }
    }

    componentDidMount() {
        this.props.getUserAd(
            this.props.navigation.getParam('region_slug', 'Not Working'),
            this.props.navigation.getParam('category_slug', 'Not Working'),
            this.props.navigation.getParam('slug', 'Not Working'),
        )
    }

    render () {
        const { UserAdDetailLoad, UserAdDetail } = this.props;
        if (UserAdDetailLoad) return <ActivityIndicator size="small" color="#00ff00" />
        if (!UserAdDetail.data.images) { this.state.isHideSliderImage = false }
        return (
            <View style={ styles.adDetailWrap }>
                <ScrollView>
                    <View>

                        {
                            this.state.isHideSliderImage == true?
                                <View style={styles.wrapImageSlide} hidden={this.state.isHideSliderImage} >
                                    <ImageSliderAd images={UserAdDetail.data.images} />
                                </View>:<></>
                        }
                        <View
                            style={{
                                margin:10
                            }}
                        >
                            <Text style={styles.title}>
                                { UserAdDetail.data.title }
                            </Text>
                            <Text style={styles.price}>
                                { UserAdDetail.data.price } M
                            </Text>
                        </View>


                        {
                            UserAdDetail.data.is_active ?
                                <View style={{ flex:1, marginLeft:10, marginRight:10 }}>
                                    <Button
                                        title='Снять с публикации'
                                        onPress={() => Alert('dfs')}
                                        buttonStyle= {{
                                            backgroundColor: '#28a745',
                                            borderRadius: 5,
                                            width: '100%',
                                        }}
                                    />
                                </View> :
                                <View style={{ flex:1, marginLeft:10, marginRight:10 }}>
                                    <Button
                                        title='Активировать'
                                        onPress={() => Alert('dfs')}
                                        buttonStyle= {{
                                            backgroundColor: '#28a745',
                                            borderRadius: 5,
                                            width: '100%',
                                        }}
                                    />
                                </View>
                        }


                        <View
                            style={{ display:'flex', flexDirection:'column', margin:10,}}
                        >
                            <AdAdditonalInfo titleInfo="Просмотры" valueInfo={UserAdDetail.data.views} />
                            <AdAdditonalInfo titleInfo="Размешение" valueInfo={Moment(UserAdDetail.data.add_date).format('MMMM D, H:mm')} />
                            <AdAdditonalInfo titleInfo="Место" valueInfo={UserAdDetail.data.region_title} />
                            <AdAdditonalInfo titleInfo="Категория" valueInfo={UserAdDetail.data.category_title} />
                        </View>




                        <View style={{ margin: 10 }}>
                            <ChoiceAdditionalInfoForAd ad={UserAdDetail.data} />
                        </View>


                        <View style={{ margin:10, borderBottomWidth: 0.3, borderBottomColor:'#bcb7b7', paddingBottom:25 }}>
                            <Text style={{ fontSize:25 }}>Описания</Text>
                            <Text></Text>
                            <Text>{UserAdDetail.data.description}</Text>
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
                                        <Text>{ UserAdDetail.data.user_nickname}</Text>
                                        <Text>{Moment(UserAdDetail.data.user_register_date).format('MMMM DD YYYY')}</Text>
                                    </View>
                                    <View style={{ flex:2, justifyContent:'center', alignItems:'center' }}>
                                        {
                                            UserAdDetail.data.user_avatar == true?
                                                <AvatarWithPic avatar={UserAdDetail.data.user_avatar} />:
                                                <AvatarWithoutPic nickname={UserAdDetail.data.user_nickname} />
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


const mapStateToProps = state => {
    return {
        UserAdDetail: state.profile.UserAdDetail,
        UserAdDetailLoad: state.profile.UserAdDetailLoad,
    };
};

const mapDispatchToProps = {
    getUserAd
};

export default  connect(mapStateToProps, mapDispatchToProps)(UserAdDetail);

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