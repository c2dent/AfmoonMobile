import React from 'react'
import Search from 'react-native-search-box'
import { View, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList, RefreshControl, Alert } from 'react-native'
import AdGeneral from '../component/AdGeneral'
import { NavigationEvents } from 'react-navigation'


class ExtendedSearchScreen extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            refreshing: false,
        }
    }

    componentDidMount () {
        if (this.props.currentCategory.id == 168) {
            this.props.getAds(
                this.props.currentCategory,
                this.props.currentRegion.slug,
                this.props.priceFrom,
                this.props.priceUp,
                this.props.order,
                this.props.gender,
                this.props.ageFrom,
                this.props.ageUp,
                this.props.schedule,
                this.props.workExperience
            )
        } else if (this.props.currentCategory.id == 167) {
            this.props.getAds(this.props.currentCategory,
                this.props.currentRegion.slug,
                this.props.priceFrom,
                this.props.priceUp,
                this.props.order,
                this.props.schedule,
                this.props.workExperience
            )
        } else if (this.props.currentCategory.id == 170) {
            this.props.getAds(
                region=this.props.currentCategory,
                category=this.props.currentRegion.slug,
                priceFrom=this.props.priceFrom,
                priceUp=this.props.priceUp,
                order=this.props.order,
                houseAreaFrom=this.props.houseAreaFrom,
                houseAreaUp=this.props.houseAreaUp,
                landAreaFrom=this.props.landAreaFrom,
                landAreaUp=this.props.landAreaUp,
            )
        } else if (this.props.currentCategory.id == 169) {
            this.props.getAds(
                region=this.props.currentCategory,
                category=this.props.currentRegion.slug,
                priceFrom=this.props.priceFrom,
                priceUp=this.props.priceUp,
                order=this.props.order,
                floorsInHouseFrom = this.props.floorsInHouseFrom,
                floorsInHouseUp = this.props.floorsInHouseUp,
                floorFrom = this.props.floorFrom,
                floorUp = this.props.floorUp,
                totalAreaFrom = this.props.totalAreaFrom,
                totalAreaUp = this.props.totalAreaUp,
                numberRooms = this.props.numberRooms,
            )
        } else {
            this.props.getAds(
                this.props.currentCategory,
                this.props.currentRegion.slug,
                this.props.priceFrom,
                this.props.priceUp,
                this.props.order,
            )
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.componentDidMount()
        this.setState({refreshing:false})
    }

    _onEndReached = () => {
        if (this.props.max_page == false) {
            this.props.loadMoreAds(this.props.current_page + 1)
        }
    }

    render() {
        const { isLoading, isLoaded, ads } = this.props;
        if (isLoading) return <Text>Пожалуюста подождите</Text>
        if (!isLoaded || !ads) return null;
        return (
            <View style={{ marginLeft: 10, marginRight:10, flex:1 }}>
                <NavigationEvents
                    onDidFocus={this._onRefresh}
                />
                <View>
                    <Search
                        backgroundColor="white"
                        titleCancelColor="blue"
                        cancelTitle = 'Отменить'
                        iinputBorderRadius={7}
                        cancelButtonWidth={80}
                    />
                </View>
                <FlatList
                    data={ads.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('AdDetail', {
                                slug: item.slug,
                                region_slug: item.region_slug,
                                category_slug: item.category_slug
                            })}>
                            <AdGeneral
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                add_date = {item.add_date}
                                slug={item.slug}
                                region_title={item.region_title}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
                    }
                    onEndReachedThreshold={1}
                    onEndReached={this._onEndReached}
                />
            </View>
        )
    }
}

export default ExtendedSearchScreen;