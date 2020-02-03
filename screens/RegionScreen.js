import React from 'react'
import { Text, View } from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { setCurrentRegion } from '../store/ExtendedSearch/actions'
import { connect } from 'react-redux'



class RegionScreen extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            regions: [],
        }

        this.filterRegions = this.filterRegions.bind(this)
    }

    filterRegions = () => {
        this.props.regions.map(region => {
            if (region.level == this.props.navigation.getParam('level')
                && region.lft > this.props.navigation.getParam('lft')
                && region.rght < this.props.navigation.getParam('rght')) {
                    this.state.regions.push(region)
            }
        })
    }

    render() {
        let nextScreen = ''
        if (this.props.navigation.state.routeName == "regionFilter") {
            nextScreen = 'regionFilterLevelSecond'
        }


        this.filterRegions()

        return (
            <View style={{ flex:1, marginLeft:10, marginRight:10 }}>
                <ScrollView>
                    <TouchableOpacity
                        style={{
                            paddingBottom:18,
                            paddingTop:18,
                            paddingLeft:10,
                            paddingRight:10,
                            backgroundColor: 'white',
                            marginBottom:2
                        }}
                    >
                        <View>
                            <Text style={{
                                fontSize:20,
                            }}>
                                Все
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {
                        this.state.regions.map(region => (
                            <TouchableOpacity
                                style={{
                                    paddingBottom:18,
                                    paddingTop:18,
                                    paddingLeft:10,
                                    paddingRight:10,
                                    backgroundColor: 'white',
                                    marginBottom:2
                                }}
                                key={region.id}
                                onPress={() =>
                                    {
                                        if (region.rght-region.lft>1) {
                                            this.props.navigation.navigate(nextScreen, {
                                                rght: region.rght,
                                                lft: region.lft,
                                                level: region.level + 1
                                            })
                                        } else {
                                            this.props.navigation.navigate('AdFilterOptions', {
                                                region:region
                                            })
                                        }
                                    }
                                }
                            >
                                <View>
                                    <Text style={{
                                        fontSize:20,
                                    }}>
                                        { region.title }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentRegion: state.extendedSearch.currentRegion,
    };
};

const mapDispatchToProps = {
    setCurrentRegion,
};

export default  connect(mapStateToProps, mapDispatchToProps)(RegionScreen);