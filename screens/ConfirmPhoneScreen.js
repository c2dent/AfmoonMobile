import React from 'react'
import { Button, Input } from 'react-native-elements'
import { View, Text, Keyboard } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import { setConfirmPhoneNumber } from '../store/Login/actions'
import { connect } from 'react-redux'



const DismissKeybord = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


class ConfirmPhoneScreen extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            confirmCode: '',
            buttonLoading: false,
        }
    }


    noValidCode = () => {
        Alert.alert(
            'Код должен быть из 6 ти цифр',
            '',
            [
                {text: 'ok', onPress: () => {}}
            ],
            { cancelable: false}
        )
    }

    errorStatus = () => {
        Alert.alert(
            'Извините произашло какой-то ощибка',
            '',
            [
                {text: 'ok', onPress: () => {}}
            ],
            { cancelable: false}
        )
    }


    render() {

        let phoneNumber = this.props.navigation.getParam('phone')

        return (
            <View>
                <DismissKeybord>



                    <View
                        style={{
                            margin:20,
                        }}
                    >
                        <Text
                            style={{fontSize:25}}
                        >
                            +{phoneNumber}
                        </Text>
                    </View>



                    <View style={{marginBottom:20}}>
                        <Input
                            keyboardType="numeric"
                            onChangeText={(text) => this.setState({confirmCode:text})}
                            placeholder='Код из СМС'
                            inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                            inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                            defaultValue={this.state.phoneNumber}
                        />
                    </View>


                    <View
                        style={{
                            marginBottom:20,
                            marginLeft:10,
                        }}
                    >
                        <Text style={{ color:'#969494', fontSize:15 }}>
                            Код действителен в течение 10 минут.
                        </Text>
                    </View>



                    <View
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                            marginBottom:15
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({buttonLoading: true})
                                if (this.state.confirmCode.toString().length != 6) {
                                    this.noValidCode()
                                } else {
                                    this.props.setConfirmPhoneNumber(phoneNumber, this.state.confirmCode, this.props.otpKey)
                                        .then((data) => {
                                            if (data.token) {
                                                this.props.navigation.navigate('initScreen')
                                            } else {
                                                this.errorStatus()
                                            }
                                        })
                                }
                                this.setState({buttonLoading: false})
                            }}
                        >
                            <Button
                                title='Подтвердить'
                                buttonStyle= {{
                                    backgroundColor: '#28a745',
                                    borderRadius: 5,
                                    width: '90%',
                                }}
                                loading={this.state.buttonLoading}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 17,
                                    color: '#28a745'
                                }}
                            >
                                Отправить смс еще раз
                            </Text>
                        </TouchableOpacity>
                    </View>
                </DismissKeybord>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        phoneLoading: state.login.phoneLoading,
        serverError: state.login.serverError,
        phoneSuccess: state.login.phoneSuccess,
        otpKey: state.login.otpKey
    };
};

const mapDispatchToProps = {
    setConfirmPhoneNumber,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ConfirmPhoneScreen);