import React from 'react'
import { View, Text } from 'native-base'
import { connect } from 'react-redux'
import { TouchableOpacity, ScrollView } from 'react-native'



class ChooseAsList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let list =  this.props.navigation.getParam('data')
        let setBodyType =  this.props.navigation.getParam('setBodyType')
        let renderIndex =  this.props.navigation.getParam('renderIndex')
        return (
            <ScrollView>
                {
                    list.map((item,index) => (
                        <View
                            key={index}
                        >
                            <TouchableOpacity
                                style={{
                                    paddingBottom:18,
                                    paddingTop:18,
                                    paddingLeft:10,
                                    paddingRight:10,
                                    backgroundColor: 'white',
                                    marginBottom:2
                                }}
                                key={index}
                                onPress={() =>
                                    {
                                        setBodyType(item)
                                        this.props.navigation.navigate('AdFilterOptions')
                                    }
                                }
                            >
                                <View>
                                    <Text style={{
                                        fontSize:20,
                                    }}>
                                        { item[renderIndex] }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = {
}

export default  connect(mapStateToProps, mapDispatchToProps)(ChooseAsList);