import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import InitScreen from '../screens/InitScreen'
import ConfirmPhoneScreen from '../screens/ConfirmPhoneScreen'
import ProfileSettings from '../component/profileScreen/ProfileSettings'
import ProfileInfo from '../component/profileScreen/ProfileInfo'
import UserAdDetail from '../component/profileScreen/UserAdDetail'
import ProfileAdNavigation from '../component/profileScreen/ProfileAdNavigation'


const ProfileScreenNavigator = createStackNavigator({
    login: {screen: LoginScreen},
    initScreen: {screen: InitScreen},
    confirmPhone: {screen: ConfirmPhoneScreen},
    profileSettingsScreen: {screen: ProfileSettings},
    profileInfoScreen: {screen: ProfileInfo},
    userAdDetail: {screen: UserAdDetail},
    profileAdNavigation: { screen: ProfileAdNavigation },
  },
  {
    headerMode: 'screen',
    initialRouteName: 'initScreen'
  }
);

export default ProfileScreenNavigator;