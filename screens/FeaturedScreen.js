import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FeaturedScreen= () => (
    <View style={styles.container}>
        <Text>Избранные</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FeaturedScreen