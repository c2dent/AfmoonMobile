import SearchContainer from '../component/SearchContainer'
import { createStackNavigator } from 'react-navigation-stack'
import AdDetailContainer from '../component/AdDetailContainer'
import ExtendedSearchContainer from '../component/ExtendedSearchContainer'
import AdFilterOptions from '../modal/AdFilterOptions'
import CategoryContainer from '../component/CategoryContainer'
import RegionContainer from '../component/RegionContainer'



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
    },
    CategoryFilter: {
      screen: CategoryContainer,
    },
    categoryFilterLevelSecond: {
      screen: CategoryContainer,
    },
    categoryFilterLevelTird: {
      screen: CategoryContainer,
    },
    categoryFilterLevelFourth: {
      screen: CategoryContainer,
    },
    regionFilter: {
      screen: RegionContainer,
    },
    regionFilterLevelSecond: {
      screen: RegionContainer
    }
  },
  {
    headerMode: 'screen'
  }
);

export default SearchScreenNavigator;