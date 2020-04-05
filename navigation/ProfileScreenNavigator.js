import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen'
import InitScreen from '../screens/InitScreen'
import ConfirmPhoneScreen from '../screens/ConfirmPhoneScreen'
import ProfileSettings from '../component/profileScreen/ProfileSettings'
import ProfileInfo from '../component/profileScreen/ProfileInfo'
import UserAdDetail from '../component/profileScreen/UserAdDetail'
import ProfileAdNavigation from '../component/profileScreen/ProfileAdNavigation'
import AvtomobileForm from '../component/AddItem/FormScreens/AvtomobileForm'
import ApartmentForm from '../component/AddItem/FormScreens/ApartmentForm'
import HouseForm from '../component/AddItem/FormScreens/HouseForm'
import LandForm from '../component/AddItem/FormScreens/LandForm'
import ResumeForm from '../component/AddItem/FormScreens/ResumeForm'
import SimpleForm from '../component/AddItem/FormScreens/SimpleForm'
import VacancyForm from '../component/AddItem/FormScreens/VacancyForm'
import RenderSelectItem from '../component/AddItem/RenderSelectItem'
import RenderChooseItem from '../component/AddItem/RenderChooseItem'


const ProfileScreenNavigator = createStackNavigator({
    login: {screen: LoginScreen},
    initScreen: {screen: InitScreen},
    confirmPhone: {screen: ConfirmPhoneScreen},
    profileSettingsScreen: {screen: ProfileSettings},
    profileInfoScreen: {screen: ProfileInfo},
    userAdDetail: {screen: UserAdDetail},
    profileAdNavigation: { screen: ProfileAdNavigation },
    editAvtomobileForm: {screen: AvtomobileForm},
    editApartmentForm: {screen: ApartmentForm},
    editHouseForm: {screen: HouseForm},
    editLandForm: {screen: LandForm},
    editVacancyForm: {screen: VacancyForm},
    editResumeForm: {screen: ResumeForm},
    editSimpleForm: {screen: SimpleForm},
    selectItem: {screen: RenderSelectItem},
    chooseItem: {screen: RenderChooseItem},
  },
  {
    headerMode: 'screen',
    initialRouteName: 'initScreen'
  }
);

export default ProfileScreenNavigator;