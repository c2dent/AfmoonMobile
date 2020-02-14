import React from 'react'
import ExtendedSearchScreen from '../screens/ExtendedSearchScreen'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { getAds, setAdsLoading } from '../store/ExtendedSearch/actions'



class ExtendedSearchContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            only: 'fsdf'
        }
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: () => {
                return (
                    <View
                        style={{
                            marginRight: 20,
                            width:30,
                            height:30,
                            justifyContent:'center',
                            alignItems: 'center'
                        }}
                    >
                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('AdFilterOptions')
                                }}
                            >
                                <Ionicons name={'ios-options'} size={30} color={'black'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            },
            headerTitle: () => {
                return (
                    <></>
                )
            },
            gestureEnabled: true,
        }
    }



    render() {
        return (
            <ExtendedSearchScreen
                navigation={this.props.navigation}
                isLoaded = {this.props.isLoaded}
                isLoading = {this.props.isLoading}
                ads = {this.props.ads}
                currentCategory = {this.props.currentCategory}
                currentRegion={this.props.currentRegion}
                getAds = {this.props.getAds}
                priceUp={this.props.priceUp}
                priceFrom={this.props.priceFrom}
                order= {this.props.order}
                gender = {this.props.gender}
                ageFrom = {this.props.ageFrom}
                ageUp = {this.props.ageUp}
                schedule = {this.props.schedule}
                workExperience = {this.props.workExperience}
                houseAreaFrom = {this.props.houseAreaFrom}
                houseAreaUp = {this.props.houseAreaUp}
                landAreaFrom = {this.props.landAreaFrom}
                landAreaUp = {this.props.landAreaUp}

                floorsInHouseFrom = {this.props.floorsInHouseFrom}
                floorsInHouseUp = {this.props.floorsInHouseUp}
                floorFrom = {this.props.floorFrom}
                floorUp = {this.props.floorUp}
                totalAreaFrom = {this.props.totalAreaFrom}
                totalAreaUp = {this.props.totalAreaUp}
                numberRooms = {this.props.numberRooms}
                rentBuy = {this.props.rentBuy}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading : state.extendedSearch.isLoading,
        isLoaded : state.extendedSearch.isLoaded,
        ads : state.extendedSearch.ads,
        currentCategory : state.extendedSearch.currentCategory,
        currentRegion: state.extendedSearch.currentRegion,
        priceFrom: state.extendedSearch.priceFrom,
        priceUp: state.extendedSearch.priceUp,
        order: state.extendedSearch.order,
        gender: state.extendedSearch.gender,
        ageFrom: state.extendedSearch.ageFrom,
        ageUp: state.extendedSearch.ageUp,
        schedule: state.extendedSearch.schedule,
        workExperience : state.extendedSearch.workExperience,
        houseAreaFrom: state.extendedSearch.houseAreaFrom,
        houseAreaUp: state.extendedSearch.houseAreaUp,
        landAreaFrom: state.extendedSearch.landAreaFrom,
        landAreaUp: state.extendedSearch.landAreaUp,

        floorsInHouseFrom : state.extendedSearch.floorsInHouseFrom,
        floorsInHouseUp : state.extendedSearch.floorsInHouseUp,
        floorFrom : state.extendedSearch.floorFrom,
        floorUp : state.extendedSearch.floorUp,
        totalAreaFrom : state.extendedSearch.totalAreaFrom,
        totalAreaUp : state.extendedSearch.totalAreaUp,
        numberRooms : state.extendedSearch.numberRooms,
        rentBuy : state.extendedSearch.rentBuy,
    };
};

const mapDispatchToProps = {
    getAds, setAdsLoading,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ExtendedSearchContainer);