import React from 'react'
import { AsyncStorage } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';



export default class InitScreen extends React.Component {

    componentDidMount () {
        AsyncStorage.getItem('token').then((token) => {
            const mainPage = !!token ? 'profileAdNavigation' : 'login';
            const resetAction = StackActions.reset({
                index:0,
                actions: [
                    NavigationActions.navigate({ routeName: mainPage })
                ]
            });
            this.props.navigation.dispatch(resetAction)
        })
    }

    render() {
        return (
            <></>
        )
    }

}
