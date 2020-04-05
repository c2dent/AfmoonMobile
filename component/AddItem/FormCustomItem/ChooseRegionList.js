import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class ChooseRegionList extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            placeholderColor: '#969494',
            region: this.props.defaultValue,
        }

        this.RegionList = this.RegionList.bind(this)
    }

    RegionList = () => {
        let regions =[]
        this.props.regions.map((region) => {
            if (region.lft + 1 == region.rght) {
                regions.push(region)
            }
        })
        return regions
    }

    emptyRegion = () => {
        this.setState({ placeholderColor: 'red'})
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    marginTop:30,
                    padding:10
                }}
            >
                <TouchableOpacity
                    style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection: 'row'}}
                    onPress={() => this.props.navigation.navigate('chooseItem', {
                        itemList: this.RegionList(),
                        setRegion: (region) => {
                            this.setState({ region: region })
                            this.props.setRegion(region)
                        },
                        defaultValue: this.props.defaultValue
                    })}
                >
                    <View
                        style={{display:'flex', justifyContent:'flex-start', alignItems:'center' , flexDirection: 'row'}}
                    >
                        <Ionicons name={'ios-locate'} size={23} color={'black'} />
                        <Text
                            style={{
                                fontSize:20,
                                color:'#969494',
                                marginLeft:5,
                            }}
                        >
                            {
                                this.state.region ?
                                    <Text style={{fontSize:20, color:'black', marginLeft:5}}>{ this.state.region.title }</Text> :
                                    <Text style={{fontSize:20, color:this.state.placeholderColor , marginLeft:5}}>Место встречи</Text>
                            }

                        </Text>
                    </View>
                    <Ionicons name={'ios-arrow-forward'} size={20} color={'black'} style={{ marginRight:5 }} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ChooseRegionList;