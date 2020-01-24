import React from 'react'
import { View } from 'native-base';
import { StyleSheet, Platform } from 'react-native'


class StatusBarBackground extends React.Component{
    render() {
        return (
            <View style={[styles.statusBarBackground, this.props.style || {}]}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 18:0,
        backgroundColor: 'white',
    }
})

module.exports= StatusBarBackground