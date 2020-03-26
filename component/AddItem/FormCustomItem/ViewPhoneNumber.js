import React from 'react'
import { View, Text } from 'react-native'


export default class ViewPhoneNumber extends React.Component{
    constructor(props){
        super(props)
    }

    render() {


        return (
            <View
                style={{
                    backgroundColor: 'white',
                    marginTop:15,
                    paddingLeft:10,
                    paddingBottom:5,
                    paddingTop:5,
                }}
            >
                <Text
                    style={{ color:'#969494', fontSize: 14}}
                >
                    Номер телефона
                </Text>
                <Text style={{ fontSize: 21 }}>
                    {
                        this.props.phone_number
                    }
                </Text>
            </View>
        )
    }
}