import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import FeaturedScreen from '../screens/FeaturedScreen'
import FavoriteAdDetailContainer from '../component/Favorite/FavoriteAdDetailContainer'

const FavoriteAdDetailNavigator = createStackNavigator({
        favorites : {screen: FeaturedScreen},
        favoriteDetail: {screen: FavoriteAdDetailContainer},
    },
    {
        headerMode: 'screen',
        initialRouteName: 'favorites'
    }
)

export default FavoriteAdDetailNavigator;