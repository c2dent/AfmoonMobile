import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


class RenderCategoryList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fromScreen: 'sdf'
        }

        this.ChoosenCategory = this.ChoosenCategory.bind(this)
    }


    ChoosenCategory = () => {
        if (this.props.category.lft + 1 < this.props.category.rght) {
            this.props.navigation.navigate(this.props.nextScreen, {
                rght: this.props.category.rght,
                lft: this.props.category.lft
            })
        } else {
            switch (this.props.category.id) {
                case 172:
                    this.props.navigation.navigate('avtomobileForm', {category: this.props.category})
                    break;
                default:
                    this.props.navigation.navigate('simpleForm', {category: this.props.category})
            }
        }
    }


    render() {
        const { category, index} = this.props
        return (
            <View>
                <TouchableOpacity
                    style={{
                        paddingBottom:18,
                        paddingTop:18,
                        paddingLeft:10,
                        paddingRight:10,
                        backgroundColor: 'white',
                    }}
                    key={index}
                    onPress={() => this.ChoosenCategory()}
                >
                    <View style={{ display:'flex', justifyContent:'space-between', flexDirection: 'row'}}>
                        <Text style={{
                            fontSize:20,
                        }}>
                            { category.title }
                        </Text>
                        {
                            category.lft + 1 < category.rght ?
                                <Ionicons name={'ios-arrow-forward'} size={20} color={'black'} /> : null
                        }
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RenderCategoryList;
