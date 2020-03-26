import { createStackNavigator } from 'react-navigation-stack'

import AddItemScreen from '../screens/AddItemScreen'
import CategoryLevel2 from '../component/AddItem/CategoryLevel2'
import CategoryLevel3 from '../component/AddItem/CategoryLevel3'
import SimpleForm from '../component/AddItem/FormScreens/SimpleForm'
import AvtomobileForm from '../component/AddItem/FormScreens/AvtomobileForm'
import RenderChooseItem from '../component/AddItem/RenderChooseItem'
import RenderSelectItem from '../component/AddItem/RenderSelectItem'


const AddItemNavigator = createStackNavigator({
        addItem : {screen: AddItemScreen},
        categoryLevel2: {screen: CategoryLevel2},
        categoryLevel3: {screen: CategoryLevel3},
        simpleForm: {screen: SimpleForm},
        chooseItem: {screen: RenderChooseItem},
        avtomobileForm: { screen: AvtomobileForm},
        selectItem: {screen: RenderSelectItem},
    },
    {
        headerMode: 'screen',
        initialRouteName: 'addItem'
    }
)

export default AddItemNavigator;