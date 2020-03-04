import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { FlatList, RefreshControl, Alert, View, Text, ActivityIndicator } from 'react-native'
import AdGeneral from '../AdGeneral'
import { getUserAds } from '../../store/Profile/actions'



class ActiveAds extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            refreshing: false,
        }
        this.userAdsActive = this.userAdsActive.bind(this)
    }


    componentDidMount() {
        this.props.getUserAds()
    }


    userAdsActive = (userAds, returnState) => {
        let ads = []
        if (userAds) {
            userAds.forEach(element => {
                if (element.is_active == returnState) {
                    ads.push(element)
                }
            });

            return ads
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        this.props.getUserAds()
            .then(() => {
                this.setState({refreshing:false})
            })
    }


    static navigationOptions = {
        tabBarLabel: 'Активные',
    }


    render() {
        if (this.props.userAdsLoading) return <ActivityIndicator size="small" color="#00ff00" />
        let ads = this.userAdsActive(this.props.userAds.ad, true)
        console.log(this.props.userAds)
        return (
            <View style={{ marginLeft:10, marginRight:10, marginTop:5 }}>
                <FlatList
                    data={ads}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.screenProps.rootNavigation.navigate('userAdDetail', {
                                    slug: item.slug,
                                    region_slug: item.region_slug,
                                    category_slug: item.category_slug
                                })
                            }}
                        >
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

const mapStateToProps = state => {
    return {
        userAdsLoading: state.profile.userAdsLoading,
        userAds: state.profile.userAds,
    };
};

const mapDispatchToProps = {
    getUserAds,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ActiveAds);