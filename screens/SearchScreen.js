import React, {Component} from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import AdGeneral from '../component/AdGeneral'
import { TouchableOpacity} from 'react-native-gesture-handler';



export default class SearchScreen extends Component
{
    constructor(props){
        super(props);

        this.state = {
            refreshing: false,
        }
    }
    componentDidMount(){
        this.props.getAds();
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.props.getAds().then(() => {
            this.setState({refreshing:false})
        })
    }

    _onEndReached = () => {
        if (this.props.max_page == false) {
            this.props.loadMoreAds(this.props.current_page + 1)
        }
    }

    render()
    {
        return (
                <SafeAreaView style={{ marginLeft: 10, marginRight:10, marginTop:5 }}>
                    <FlatList
                        data={this.props.ad_list}
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
                        keyExtractor={(item =>item.title + item.slug)}
                        refreshControl={
                            <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
                        }
                        onEndReachedThreshold={1}
                        onEndReached={this._onEndReached}
                    />
                </SafeAreaView>
        );
    }
}