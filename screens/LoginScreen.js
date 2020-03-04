import React from 'react'
import { View, Text, StyleSheet, Keyboard, Alert } from 'react-native'
import StatusBarBackground from '../component/StatusBarBackground'
import { Input } from 'react-native-elements'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements'
import { setPhoneNumber } from '../store/Login/actions'
import { connect } from 'react-redux'


const DismissKeybord = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


class LoginScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phoneNumber:'993',
            phoneNumberValid: true,
            buttonLoading: false,
        }

        this.unValidPhone = this.unValidPhone.bind(this)
        this.sendPhoneSuccess = this.sendPhoneSuccess.bind(this)
        this.sendPhoneError = this.sendPhoneError.bind(this)
    }


    unValidPhone = () => {
        Alert.alert(
            'Номер телефона введен некорректно',
            '',
            [
                {text: 'ok', onPress: () => console.log('OK Pressed')}
            ],
            { cancelable: false}
        )
    }


    sendPhoneSuccess = () => {
        this.setState({buttonLoading: false})
        this.props.navigation.navigate('confirmPhone', {
            phone: '+' + this.state.phoneNumber
        })
    }

    sendPhoneError = () => {
        Alert.alert(
            'Извините произашло какой-то ошибка',
            '',
            [
                {text: 'ok', onPress: () => this.setState({buttonLoading:false})}
            ],
            { cancelable: false}
        )
    }




    static navigationOptions = ({ navigation }) => {
        return {
            headerShown:false,
        }
    }



    render() {

        return (
            <View>
                <StatusBarBackground />
                <DismissKeybord>
                <View
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        margin:40
                    }}
                >


                    <View style={{ height:200}}>
                        <Text style={{fontSize:40}}>LOGO</Text>
                    </View>



                    <View
                        style={{
                            display:'flex',
                            flexDirection:'row',
                            marginBottom:25
                        }}
                    >

                        <View
                            style={{
                                    flex:9,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems:'flex-start'
                                }}
                        >
                            <Input
                                keyboardType="numeric"
                                onChangeText={(text) => {
                                    this.setState({phoneNumber: text})
                                    this.state.phoneNumberValid = true
                                }}
                                placeholder='Введите номер'
                                inputStyle={[styles.input, !this.state.phoneNumberValid ? styles.errorInput : null ]}
                                inputContainerStyle={{ padding: 5, backgroundColor: '#F2F2F2', margin: 0}}
                                defaultValue={this.state.phoneNumber}
                                containerStyle={{ paddingHorizontal: 0 }}
                                inputContainerStyle={{margin:0,padding:0}}
                                leftIconContainerStyle={{margin:0,padding:0}}
                                leftIcon={
                                    <Text
                                        style={[styles.textPlus, !this.state.phoneNumberValid ? styles.errorInput : null ]}
                                    >
                                        +
                                    </Text>
                                }

                            />
                        </View>


                    </View>

                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                if (this.state.phoneNumber.toString().length < 9) {

                                    this.setState({phoneNumberValid: false})
                                    this.unValidPhone()

                                } else {
                                    this.setState({buttonLoading: true})
                                    this.props.setPhoneNumber('+' + this.state.phoneNumber)
                                        .then((status) => {
                                            if (status == 'Success') {
                                                this.sendPhoneSuccess()
                                            } else {
                                                this.sendPhoneError()
                                            }
                                        })

                                }
                            }}
                        >
                            <Button
                                title='Подтвердить'
                                buttonStyle= {{
                                    backgroundColor: '#28a745',
                                    borderRadius: 5,
                                    width: '100%',
                                }}
                                loading={this.state.buttonLoading}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
                </DismissKeybord>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    errorInput: {
        color:'red'
    },

    input: {
        backgroundColor:'#F2F2F2',
        width: '100%',
        fontSize: 20,
        width: '100%',
        paddingVertical:0
    },
    textPlus: {
        fontSize: 20,
    }
})

const mapStateToProps = state => {
    return {
        phoneLoading: state.login.phoneLoading,
        serverError: state.login.serverError,
        phoneSuccess: state.login.phoneSuccess,
    };
};

const mapDispatchToProps = {
    setPhoneNumber,
};

export default  connect(mapStateToProps, mapDispatchToProps)(LoginScreen);