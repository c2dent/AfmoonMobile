import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


class RenderForSelectItem extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            item: this.props.defaultValue,
            placeholderColor: '#949496',
        }

    }

    toEmptyValue = () => {
        this.setState({ item: '' })
    }

    emptySelect =() => {
        this.setState({ placeholderColor: 'red' })
    }


    render() {
        return (
            <View style={ styles.wrap }>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('selectItem', {
                        itemList: this.props.itemList,
                        renderIndex: this.props.renderIndex,
                        setItem: (item) => {
                            this.setState({ item: item })
                            this.props.setItem(item)
                        },
                        defaultValue: this.state.item
                    })}
                >
                    <View style={styles.container}>
                        <View>
                            <Text style={{ fontSize:18 }}>
                                { this.props.whatChoose }
                            </Text>
                        </View>
                        <View style={styles.container}>
                            {
                                !this.state.item ?
                                    <Text style={{ fontSize:17, color:this.state.placeholderColor }}>
                                        Не указано
                                    </Text> :
                                    <Text style={{ fontSize:17 }}>
                                        { this.state.item[this.props.renderIndex] }
                                    </Text>
                            }
                            <View style={{ marginLeft:8 }}>
                                <Ionicons name={'ios-arrow-forward'} size={20} color={'black'} style={{ marginRight:5 }} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    wrap: {
        backgroundColor: 'white',
        marginTop: 10,
        padding:10
    },
    container: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})

export default RenderForSelectItem;