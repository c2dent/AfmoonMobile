import React from 'react'
import { View, Text  } from 'native-base'
import { connect } from 'react-redux'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet, Image, Alert } from 'react-native'
import Moment from 'moment'
import { Ionicons } from '@expo/vector-icons'
import { Button } from 'react-native-elements'


const AvatarWithoutPic = (props) => {
    return (
        <View
            style={{
                backgroundColor: 'yellow',
                width:90,
                height:90,
                borderRadius: 45,
                justifyContent:'center',
                alignItems: 'center',
            }}
        >
            <Text style={{fontSize:80}}>
                {props.nickname ? props.nickname[0] : 'A'}
            </Text>
        </View>
    )
}




const AvatarWithPic = (props) => {
    return (
        <View
            style={{
                width:90,
                height:90,
                borderRadius:45,
            }}
        >
            <Image
                resizeMode="contain"
                style={{ height:90, width: 90,}}
                source={{ uri:'http://192.168.1.9:8000' + props.avatar }}
            />
        </View>
    )
}



class ProfileInfo extends React.Component {

    constructor (props) {
        super(props)
    }


    exit = () => {
        Alert.alert(
            'Вы действительно хотите выйти?',
            '',
            [
                {text: 'Да', onPress: () => console.log('ok')},
                {text: 'Нет', onPress: () => console.log('cancel')}
            ],
        )
    }



    render () {


        return (
            <View style={{ flex:1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.headerProfileInfo}>
                        <View style={styles.wrapGeneralInfo}>
                            <View style={styles.avatar}>
                                {
                                    this.props.profile.avatar ?
                                        <AvatarWithPic avatar={this.props.profile.avatar} /> :
                                        <AvatarWithoutPic nickname={this.props.profile.nickname} />
                                }
                            </View>


                            <View style={styles.generalInfo}>
                                <Text style={{ fontSize:25 }}>
                                    { this.props.profile.nickname }
                                </Text>
                                <Text style={{ fontSize:18, marginTop:5, marginBottom: 5}}>
                                    {Moment(this.props.profile.register_date).format('MMMM DD YYYY')}
                                </Text>
                                <Text style={{ fontSize:18, marginTop:5, marginBottom: 5}}>
                                    {
                                        this.props.profile.region ? this.props.profile.region_title : 'Туркменистан'
                                    }
                                </Text>
                                <Text style={{ fontSize:18, marginTop:5, marginBottom: 5}}>
                                    {
                                        this.props.profile.phone_number
                                    }
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginLeft:10, marginRight:10, marginBottom:15, marginTop:15 }}>
                            <TouchableOpacity>
                                <Button
                                    title='Редактировать'
                                    buttonStyle= {{
                                        backgroundColor: '#28a745',
                                        borderRadius: 5,
                                        width: '100%',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.wrapItem}>
                        <TouchableOpacity>
                            <View style={styles.wrapTextItem}>
                                <Text style={{ fontSize:22 }}>
                                    Уведомления
                                </Text>
                                <Ionicons name={'ios-arrow-forward'} size={22} color={'black'} />
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.wrapItem}>
                        <TouchableOpacity>
                            <View style={styles.wrapTextItem}>
                                <Text style={{ fontSize:22 }}>
                                    Служба поддержки
                                </Text>
                                <Ionicons name={'ios-arrow-forward'} size={22} color={'black'} />
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.wrapItem}>
                        <TouchableOpacity>
                            <View style={styles.wrapTextItem}>
                                <Text style={{ fontSize:22 }}>
                                    Лецензионная соглашения
                                </Text>
                                <Ionicons name={'ios-arrow-forward'} size={22} color={'black'} />
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={styles.wrapItem}>
                        <TouchableOpacity
                            onPress={() => this.exit()}
                        >
                            <Button
                                title='Выйти'
                                buttonStyle= {{
                                    backgroundColor: '#ed4040',
                                    borderRadius: 5,
                                    width: '100%',
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapGeneralInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    avatar: {
        flex:1,
        justifyContent:'center',
        margin:12,
    },
    generalInfo: {
        flex:2,
        alignItems:'flex-end',
        justifyContent: 'center',
        margin:15,
    },
    headerProfileInfo: {
        backgroundColor: 'white',
        borderRadius:5,
        margin:10
    },
    wrapItem: {
        backgroundColor: 'white',
        borderRadius:5,
        margin:10
    },
    wrapTextItem: {
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:15,
        paddingBottom:15,
    }
})

const mapStateToProps = state => {
    return {
        profile: state.profile.profile
    };
};

const mapDispatchToProps = {
};

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);