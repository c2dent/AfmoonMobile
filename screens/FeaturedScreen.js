import React from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native'
import AdGeneral from '../component/AdGeneral'
import { getUserFavorites } from '../store/FavoriteAds/actions'
import { connect } from 'react-redux';



class FeaturedScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            refreshing: false,
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Избранные'
        }
    }


    componentDidMount() {
        this.props.getUserFavorites()
    }


    _onRefresh = () => {
        this.setState({refreshing: true});
        this.props.getUserFavorites()
            .then(() => {
                this.setState({refreshing:false})
            })
    }


    render() {
        if (this.props.ad_list_loading) return <ActivityIndicator size="small" color="#00ff00" />
        if (!this.props.ad_list.data.favorites) return <ActivityIndicator size="small" color="#00ff00" />
        return (
            <View style={{ flex:1, marginLeft:10, marginRight:10 }}>
                    <FlatList
                        style={{ flex:1 }}
                        data={this.props.ad_list.data.favorites}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('favoriteDetail', {
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
                    />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


const mapStateToProps = state => {
    return {
        ad_list: state.favoriteAds.ad_list,
        ad_list_loading: state.favoriteAds.ad_list_loading,
    }
}

const mapDispatchToProps = {
    getUserFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedScreen);