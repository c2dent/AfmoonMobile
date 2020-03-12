import * as React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import ActiveAds from './ActiveAds'
import OldAds from './OldAds'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import ProfileHeaderLeft from './ProfileHeaderLeft'


const ProfileAdNavigator = createMaterialTopTabNavigator(
    {
        activeAds: {
            screen: ({navigation}) => <ActiveAds screenProps={{rootNavigation: navigation}} />,
            navigationOptions: {
                tabBarLabel: 'Активные'
            }
        },
        oldAds: {
            screen: ({navigation}) => <OldAds screenProps={{rootNavigation: navigation}} />,
            navigationOptions: {
                tabBarLabel: 'Завершенные'
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: '#757474',
            labelStyle: {
                fontSize: 14,
                fontWeight:'500'
            },
            style: {
                backgroundColor: '#F2F2F2'
            },
            indicatorStyle: {
                backgroundColor: '#28a745'
            }
        },
        initialRouteName: 'activeAds',
    }
)




ProfileAdNavigator.navigationOptions = ({ navigation }) => {
    return {
        headerLeft: () => {
            return (
                <ProfileHeaderLeft navigation={navigation} />
            )
        },
        headerTitle: () => {
            return (
                <></>
            )
        },
        headerRight: () => {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('profileSettingsScreen')}
                >
                    <View style={{marginRight:20}}>
                        <Ionicons name={'ios-settings'} size={30} color={'black'} />
                    </View>
                </TouchableOpacity>
            )
        }
    }
}


export default ProfileAdNavigator