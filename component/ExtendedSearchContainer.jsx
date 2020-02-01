import React from 'react'
import ExtendedSearchScreen from '../screens/ExtendedSearchScreen'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { setCallChooseCategory } from '../store/ExtendedSearch/actions'
import { connect } from 'react-redux'



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
                setCallChooseCategory={this.props.setCallChooseCategory}
                navigation={this.props.navigation}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
    setCallChooseCategory,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ExtendedSearchContainer);