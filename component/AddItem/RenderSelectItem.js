import React from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'




class RenderSelectItem extends React.Component {
    constructor(props) {
        super(props)

    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => {
                return (
                    <></>
                )
            },
            headerLeft: () => {
                return (
                    <View style={{ marginLeft:10 }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name={'ios-arrow-back'} size={30} color={'blue'} />
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    }


    render() {
        const items = this.props.navigation.getParam('itemList')
        const setItem = this.props.navigation.getParam('setItem')
        const defaultVaule = this.props.navigation.getParam('defaultValue')
        const renderIndex = this.props.navigation.getParam('renderIndex')
        return (
            <View>
                <ScrollView>
                    {
                        items.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    backgroundColor: 'white',
                                    marginBottom:2,
                                    paddingLeft:10,
                                    paddingBottom:10,
                                    paddingTop:10,
                                }}
                                onPress={ () => {
                                    setItem(item)
                                    this.props.navigation.goBack()
                                }}
                            >
                                {
                                    item == defaultVaule ?
                                        <Text style={{ fontSize:20, color:"#28a745" }}>{ item[renderIndex]}</Text> :
                                        <Text style={{ fontSize:20 }}>{ item[renderIndex]}</Text>
                                }
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default RenderSelectItem;
