import React from 'react'
import AdDetailScreen from '../screens/AdDetailScreen'
import { connect } from 'react-redux';
import { uploadAd, getAd } from '../store/AdDetail/actions'
import { addRemoveFavorite } from '../store/Profile/actions'
import { View } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Vibration } from 'react-native'


class IconFeatured extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            disabledAddRemoveButton: false,
        }

        this.AddRemoveError = this.AddRemoveError.bind(this)
    }

    AddRemoveError = () => {
        Alert.alert(
            'Извините произашло какой-то ошибка',
            '',
            [
                {text: 'ok', onPress: () => this.setState({disabledAddRemoveButton:false})}
            ],
            { cancelable: false}
        )
    }

    render () {
        return (
            <View style={{
                marginRight: 20,
                width:30,
                height:30,
                justifyContent:'center',
                alignItems: 'center'}}>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ disabledAddRemoveButton: true })
                            this.props.addRemoveFavorite(this.props.product_id)
                                .then((response) => {
                                    if ( response.status == 200) {
                                        Vibration.vibrate()
                                        this.props.uploadAd(this.props.region_slug, this.props.category_slug, this.props.slug)
                                            .then(() => this.props.uploadIcon())
                                        this.setState({ disabledAddRemoveButton: false })
                                    } else {
                                        this.AddRemoveError()
                                    }
                                })
                        }}
                        disabled={this.state.disabledAddRemoveButton}
                    >
                        {
                            this.props.favorite ? <Ionicons name={'ios-heart'} size={30} color={'#28a745'} /> :
                                <Ionicons name={'ios-heart-empty'} size={30} color={'#28a745'} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


class AdDetailContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }

        this.uploadIcon = this.uploadIcon.bind(this)
    }

    uploadIcon = () => {
        this.props.navigation.setParams({favorite: this.props.ad.data.favorite_for})
    }

    componentDidMount () {
        const { navigation } = this.props
        this.props.getAd(navigation.getParam('region_slug'), navigation.getParam('category_slug'), navigation.getParam('slug'))
            .then(() => {
                this.props.navigation.setParams({favorite: this.props.ad.data.favorite_for})
                this.props.navigation.setParams({product_id: this.props.ad.data.id})
                this.props.navigation.setParams({addRemoveFavorite: this.props.addRemoveFavorite})
                this.props.navigation.setParams({uploadIcon: this.uploadIcon})
                this.props.navigation.setParams({uploadAd: this.props.uploadAd})
            })
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: () => {
                return (
                    <IconFeatured
                        favorite={navigation.state.params.favorite}
                        addRemoveFavorite={navigation.state.params.addRemoveFavorite}
                        product_id={navigation.state.params.product_id}
                        uploadAd={navigation.state.params.uploadAd}
                        slug={navigation.getParam('slug')}
                        region_slug={navigation.getParam('region_slug')}
                        category_slug={navigation.getParam('category_slug')}
                        uploadIcon= {navigation.state.params.uploadIcon}
                    />
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
                slug={navigation.getParam('slug')}
                region_slug={navigation.getParam('region_slug')}
                category_slug={navigation.getParam('category_slug')}
                ad={this.props.ad}
                isLoading={this.props.isLoading}
                getAd={this.props.getAd}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        ad: state.adDetail.ad,
        isLoading: state.adDetail.isLoading,
    }
}

const mapDispatchToProps = {
    uploadAd, addRemoveFavorite, getAd
}

export default connect(mapStateToProps, mapDispatchToProps)(AdDetailContainer);