import SearchContainer from '../component/SearchContainer'
import { createStackNavigator } from 'react-navigation-stack'
import AdDetailContainer from '../component/AdDetailContainer'
import ExtendedSearchContainer from '../component/ExtendedSearchContainer'
import ChooseCategoryContainer from '../component/ChooseCategoryContainer'
import AdFilterOptions from '../modal/AdFilterOptions'
import ChooseCategoryNavigation from './ChooseCategoryNavigation'
import CategoryContainer from '../component/CategoryContainer'


const SearchScreenNavigator = createStackNavigator({
    Home: {
      screen: SearchContainer,
    },
    AdDetail: {
      screen: AdDetailContainer,
    },
    ExtendedSearch: {
      screen: ExtendedSearchContainer
    },
    AdFilterOptions: {
      screen: AdFilterOptions
    },
    ChooseCategory: {
      screen: ChooseCategoryNavigation
    },
    ChooseCategoryInFilter: {
      screen: ChooseCategoryNavigation
    },
    Category: {
      screen: CategoryContainer,
    },
    categoryLevelSecond: {
      screen: CategoryContainer,
    },
    categoryLevelTird: {
      screen: CategoryContainer,
    },
    categoryLevelFourth: {
      screen: CategoryContainer,
    }
  },
  {
    headerMode: 'screen'
  }
);

export default SearchScreenNavigator;