import React from 'react'
import AdDetailScreen from '../screens/AdDetailScreen'
import { connect } from 'react-redux';
import { getAd } from '../store/AdDetail/actions'
import { View } from 'native-base';
import { Ionicons } from '@expo/vector-icons'


class IconFeatured extends React.Component {
    render () {
        return (
            <View style={{
                marginRight: 20,
                width:30,
                height:30,
                justifyContent:'center',
                alignItems: 'center'}}>
                <View>
                    <Ionicons name={'ios-heart'} size={30} color={'black'} />
                </View>
            </View>
        )
    }
}


class AdDetailContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = () => {
        return {
            headerRight: () => {
                return (
                    <IconFeatured />
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
        const { navigation } = this.props;
        return (
            <AdDetailScreen
                slug={navigation.getParam('slug', 'Not Working')}
                region_slug={navigation.getParam('region_slug', 'Not Working')}
                category_slug={navigation.getParam('category_slug', 'Not Working')}
                ad={this.props.ad}
                isLoading={this.props.isLoading}
                isLoaded={this.props.isLoaded}
                getAd={this.props.getAd}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        ad: state.adDetail.ad,
        isLoading: state.adDetail.isLoading,
        isLoaded: state.adDetail.isLoaded
    }
}

const mapDispatchToProps = {
    getAd,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdDetailContainer);