import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import MessageScreen from '../screens/MessageScreen'
import SearchScreenNavigator from './SearchScreenNavigator'
import ProfileScreenNavigator from './ProfileScreenNavigator'
import AddItemNavigator from './AddItemNavigator'
import { View, Container, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import FavoriteAdDetailNavigator from './FavoriteAdDetailNavigator'


class IconWithBadge extends React.Component {
    render () {
        const { name, badgeCount, color, size } = this.props
        return (
            <View style={{ width: 24, height:24, margin: 5 }}>
                <Ionicons name={name} color={color} size={size} />
                {badgeCount>0 && (
                    <View style= {{
                        position: 'absolute',
                        right: -6,
                        top: -3,
                        backgroundColor: 'red',
                        borderRadius: 6,
                        width: 12,
                        height: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}

const MessageIconWithBadge = props => {
    return <IconWithBadge { ...props } badgeCount={3} />;
}

const getTabBarIcon = (navigation, focused, tintColor) => {
    const {routeName} = navigation.state
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Search') {
        iconName = 'ios-search'
    } else if (routeName === 'Featured') {
        iconName = 'ios-heart'
    } else if (routeName === 'AddAd') {
        iconName = 'ios-add-circle'
    } else if (routeName === 'Message') {
        iconName = 'ios-chatbubbles'
        IconComponent = MessageIconWithBadge;
    } else if (routeName === 'Profile') {
        iconName = 'ios-contact'
    }
    return <IconComponent name={iconName} size={30} color={tintColor} />;
}

export default createAppContainer(
    createBottomTabNavigator(
        {
            Search: {
                screen: SearchScreenNavigator,
                navigationOptions: {
                    title: 'Поиск'
                }
             },
            Featured: {
                screen: FavoriteAdDetailNavigator,
                navigationOptions: {
                    title: 'Избранный'
                }
            },
            AddAd: {
                screen: AddItemNavigator,
                navigationOptions: {
                    title: 'Добавит'
                }
            },
            Message: {
                screen: MessageScreen,
                navigationOptions: {
                    title: 'Сообщения'
                }
            },
            Profile: {
                screen: ProfileScreenNavigator,
                title: 'Профиль'
            },
        },
        {
            defaultNavigationOptions: ({navigation}) => (
                {
                    tabBarIcon: ({ focused, tintColor }) =>
                        getTabBarIcon(navigation, focused, tintColor )
                }
            ),
            tabBarOptions: {
                activeTintColor: '#28a745',
                inactiveTintColor: 'gray',
            }
        }
    )
);