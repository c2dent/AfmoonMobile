import React from 'react'
import { Modal, Text, View, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import StatusBarBackground from '../component/StatusBarBackground'




class AdFilterOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible:false,
        }
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }
    }


    render () {
        return (
            <View style={{flex:1, backgroundColor: '#f7f4f4'}}>
                <View>
                    <StatusBarBackground style={{backgroundColor:'white'}} />
                </View>


                <View style={styles.headerFilter}>
                    <View style={{flex:1}}>

                    </View>
                    <View style={{flex:1, justifyContent: "center", alignItems: 'center'}}>
                        <Text style={{ fontSize:22 }}>
                            Филтерь
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        <View style={styles.closeModal}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}
                            >
                                <Ionicons name={'ios-close'} size={50} color={'#28a745'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={{
                    margin:10
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            padding: 10
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('Category', {
                                level:1,
                                lft: 1,
                                rght:400
                            })
                        }}
                    >
                        <View>
                            <Text style={{ fontSize: 20 }}>
                                Категории
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    closeModal: {
        alignItems: 'center',
        justifyContent:'center',
    },
    headerFilter: {
        display: "flex",
        flexDirection: 'row',
        paddingLeft:15,
        backgroundColor: 'white'
    }
})

export default AdFilterOptions;