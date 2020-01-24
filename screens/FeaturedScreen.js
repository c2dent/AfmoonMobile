import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from 'react-native-search-box';

const FeaturedScreen= () => (
    <View style={styles.container}>
        <Text>Избранные</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FeaturedScreen