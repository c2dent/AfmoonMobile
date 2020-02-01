import { createStackNavigator } from 'react-navigation-stack'
import ChooseCategoryContainer from '../component/ChooseCategoryContainer'


const ChooseCategoryNavigation = createStackNavigator({
    ChooseCategory: {
      screen: ChooseCategoryContainer
    },
    ChooseCategory2: {
      screen: ChooseCategoryContainer
    },
    ChooseCategory3: {
      screen: ChooseCategoryContainer
    },
    ChooseCategory4: {
      screen: ChooseCategoryContainer
    }
  },
  {
      headerMode:'none'
  }
);

export default ChooseCategoryNavigation;