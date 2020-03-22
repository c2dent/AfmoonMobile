import React from 'react'
import { View, Text, TextInput } from 'react-native'

class CustomTextInput extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            placeholderColor: '#969494'
        }
    }

    emptyInput = () => {
        this.setState({ placeholderColor: 'red'})
    }

    render() {

        return (
            <View style={{marginTop:10}}>
                <TextInput
                    style={{
                        backgroundColor: 'white',
                        height:140,
                        fontSize:19,
                        paddingLeft:10,
                    }}
                    multiline
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.state.placeholderColor}
                    defaultValue={this.props.defaultValue}
                    onChangeText={(text) => {
                        this.props.onChangeText(text)
                        this.setState({ placeholderColor: '#969494'})
                    }}
                />
            </View>
        )
    }
}

export default CustomTextInput;