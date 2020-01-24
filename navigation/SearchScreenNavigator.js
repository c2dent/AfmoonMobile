import SearchContainer from '../component/SearchContainer'
import { createStackNavigator } from 'react-navigation-stack'
import AdDetailContainer from '../component/AdDetailContainer'

const SearchScreenNavigator = createStackNavigator({
    Home: {
      screen: SearchContainer,
    },
    AdDetail: {
      screen: AdDetailContainer,
    },
  }
);

export default SearchScreenNavigator;