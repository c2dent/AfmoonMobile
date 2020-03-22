import { createStackNavigator } from 'react-navigation-stack'

import AddItemScreen from '../screens/AddItemScreen'
import CategoryLevel2 from '../component/AddItem/CategoryLevel2'
import CategoryLevel3 from '../component/AddItem/CategoryLevel3'
import SimpleForm from '../component/AddItem/FormScreens/SimpleForm'
import ChooseRegion from '../component/AddItem/ChooseRegion'
import RenderChooseItem from '../component/AddItem/RenderChooseItem'


const AddItemNavigator = createStackNavigator({
        addItem : {screen: AddItemScreen},
        categoryLevel2: {screen: CategoryLevel2},
        categoryLevel3: {screen: CategoryLevel3},
        simpleForm: {screen: SimpleForm},
        chooseRegion: {screen: ChooseRegion},
        chooseItem: {screen: RenderChooseItem},
    },
    {
        headerMode: 'screen',
        initialRouteName: 'addItem'
    }
)

export default AddItemNavigator;