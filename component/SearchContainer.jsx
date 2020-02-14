import React from 'react';
import SearchScreen from '../screens/SearchScreen';
import { connect } from 'react-redux'
import { getAds, setSearchText,
        loadMoreAds, getAllCategory,
        getAllRegion
        } from '../store/Search/actions'
import { setCallChooseCategory } from '../store/ExtendedSearch/actions'
import Search from 'react-native-search-box'
import StatusBarBackground from './StatusBarBackground'
import { View } from 'react-native'
import {
        getSchedule,
        getWorkExperience,
        getNumberRooms,
        getGearShift,
        getBodyType,
        getDriveUnit,
        getEngineType,
        getMark,
    } from '../store/General/actions'


class SearchContainer extends React.Component {
    constructor (props){
        super(props);
    }

    static navigationOptions = () => {
        return {
            header: () => {
                return (
                    <View style={{ paddingLeft:10, paddingRight:10 }}>
                        <StatusBarBackground style={{backgroundColor:'white'}} />
                        <Search
                            backgroundColor="white"
                            titleCancelColor="blue"
                            cancelTitle = 'Отмен'
                            iinputBorderRadius={7}
                            cancelButtonWidth={80}
                        />
                    </View>
                )
            }
        }
    }
    render() {
        return (
            <View style={{ flex:1 }}>
                <SearchScreen
                    ad_list={this.props.ad_list}
                    getAds={this.props.getAds}
                    loadMoreAds={this.props.loadMoreAds}
                    valueSearchText={this.props.valueSearchText}
                    current_page={this.props.current_page}
                    max_page={this.props.max_page}
                    navigation={this.props.navigation}
                    setCallChooseCategory={this.props.setCallChooseCategory}
                    getAllCategory={this.props.getAllCategory}
                    getAllRegion = {this.props.getAllRegion}
                    getSchedule = {this.props.getSchedule}
                    getWorkExperience = {this.props.getWorkExperience}
                    getNumberRooms = {this.props.getNumberRooms}
                    getGearShift = {this.props.getGearShift}
                    getBodyType = {this.props.getBodyType}
                    getDriveUnit = {this.props.getDriveUnit}
                    getEngineType = {this.props.getEngineType}
                    getMark = {this.props.getMark}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        ad_list: state.ads.ad_list,
        valueSearchText: state.ads.valueSearchText,
        current_page : state.ads.current_page,
        max_page: state.ads.max_page,
    };
};

const mapDispatchToProps = {
    getAds, setSearchText,
    loadMoreAds,
    setCallChooseCategory,
    getAllCategory,
    getAllRegion,
    getSchedule,
    getWorkExperience,
    getNumberRooms,
    getGearShift,
    getBodyType,
    getDriveUnit,
    getEngineType,
    getMark,
};

export default  connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
