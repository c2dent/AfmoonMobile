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
        currentRegion: state.extendedSearch.currentRegion
    };
};

const mapDispatchToProps = {
    getAds, setAdsLoading
};

export default  connect(mapStateToProps, mapDispatchToProps)(ExtendedSearchContainer);