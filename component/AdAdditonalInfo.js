import React from 'react'
import { View, Text } from 'react-native'

export default AdAdditonalInfo = (props) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop:3,
                marginBottom:3
            }}
        >
            <View
                style={{ flex:1, marginRight:5 }}
            >
                <Text style={{ fontWeight: '300'}}>
                    { props.titleInfo }
                </Text>
            </View>
            <View
                style={{ flex:1, marginLeft:5 }}
            >
                <Text style={{ fontWeight: '600'}}>
                    { props.valueInfo }
                </Text>
            </View>
        </View>
    )
}