import React from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'




class RenderChooseItem extends React.Component {
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
        const regions = this.props.navigation.getParam('itemList')
        const setRegion = this.props.navigation.getParam('setRegion')
        const defaultVaule = this.props.navigation.getParam('defaultValue')
        return (
            <View>
                <ScrollView>
                    {
                        regions.map((region, index) => (
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
                                    setRegion(region)
                                    this.props.navigation.goBack()
                                }}
                            >
                                {
                                    region.title == defaultVaule.title ?
                                        <Text style={{ fontSize:20, color:"#28a745" }}>{ region.title}</Text> :
                                        <Text style={{ fontSize:20 }}>{ region.title}</Text>
                                }
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default RenderChooseItem;
