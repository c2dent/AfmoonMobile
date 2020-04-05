import { createStackNavigator } from 'react-navigation-stack'

import AddItemScreen from '../screens/AddItemScreen'
import CategoryLevel2 from '../component/AddItem/CategoryLevel2'
import CategoryLevel3 from '../component/AddItem/CategoryLevel3'
import SimpleForm from '../component/AddItem/FormScreens/SimpleForm'
import AvtomobileForm from '../component/AddItem/FormScreens/AvtomobileForm'
import ApartmentForm from '../component/AddItem/FormScreens/ApartmentForm'
import HouseForm from '../component/AddItem/FormScreens/HouseForm'
import LandForm from '../component/AddItem/FormScreens/LandForm'
import RenderChooseItem from '../component/AddItem/RenderChooseItem'
import RenderSelectItem from '../component/AddItem/RenderSelectItem'
import VacancyForm from '../component/AddItem/FormScreens/VacancyForm'
import ResumeForm from '../component/AddItem/FormScreens/ResumeForm'


const AddItemNavigator = createStackNavigator({
        addItem : {screen: AddItemScreen},
        categoryLevel2: {screen: CategoryLevel2},
        categoryLevel3: {screen: CategoryLevel3},
        simpleForm: {screen: SimpleForm},
        chooseItem: {screen: RenderChooseItem},
        avtomobileForm: { screen: AvtomobileForm},
        selectItem: {screen: RenderSelectItem},
        apartmentForm: {screen: ApartmentForm},
        houseForm: {screen: HouseForm},
        landForm: {screen: LandForm},
        vacancyForm: { screen: VacancyForm},
        resumeForm: {screen: ResumeForm},
    },
    {
        headerMode: 'screen',
        initialRouteName: 'addItem'
    }
)

export default AddItemNavigator;