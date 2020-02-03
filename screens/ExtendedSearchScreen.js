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
            refreshing: false
        }
    }

    componentDidMount () {
        this.props.getAds(this.props.currentCategory.slug, this.props.currentRegion.slug)
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.props.getAds(this.props.currentCategory.slug, this.props.currentRegion.slug).then(() => {
            this.setState({refreshing:false})
        })
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
                        keyExtractor={(item => item.id)}
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