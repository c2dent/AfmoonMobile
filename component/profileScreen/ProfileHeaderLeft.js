import * as React from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { getProfile } from '../../store/Profile/actions'


const AvatarWithoutPic = (props) => {
    return (
        <View
            style={{
                backgroundColor: 'yellow',
                width:30,
                height:30,
                borderRadius: 15,
                justifyContent:'center',
                alignItems: 'center',
            }}
        >
            <Text style={{fontSize:20}}>
                {props.nickname ? props.nickname[0] : 'A'}
            </Text>
        </View>
    )
}




const AvatarWithPic = (props) => {
    return (
        <View
            style={{
                width:30,
                height:30,
                borderRadius:15,
            }}
        >
            <Image
                resizeMode="contain"
                style={{ height:30, width: 30,}}
                source={{ uri:'http://192.168.1.9:8000' + props.avatar }}
            />
        </View>
    )
}




class ProfileHeaderLeft extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getProfile()
    }

    render() {
        const { profileError, profileLoading, profile } = this.props
        if (profileLoading) return <ActivityIndicator size="small" color="#00ff00" />
        if (profileError) {this.getProfileError()}


        return (
            <View>

                <View style={styles.wrapAvatar}>
                    <TouchableOpacity
                        style={{justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row'}}
                        onPress={() => this.props.navigation.navigate('profileInfoScreen')}
                    >
                        {
                            profile.avatar ?
                                <AvatarWithPic avatar={profile.avatar} /> :
                                <AvatarWithoutPic nickname={profile.nickname} />
                        }
                        <Text style={{ fontSize: 19, padding:5, fontWeight:'500' }}>
                            {
                                profile.nickname ? profile.nickname : 'Профиль'
                            }
                        </Text>
                        <View style={{ marginRight: 8 }}>
                            <Ionicons name={'ios-arrow-forward'} size={20} color={'black'} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapAvatar: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingRight: 10,
        marginLeft:10,
    },
    wrapHeader: {
        backgroundColor: 'white',
        display:'flex',
        flexDirection: 'row',
        padding: 10
    },
})


const mapStateToProps = state => {
    return {
        profileLoading: state.profile.profileLoading,
        profileError: state.profile.profileError,
        profile: state.profile.profile,
    };
};

const mapDispatchToProps = {
    getProfile,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileHeaderLeft);
