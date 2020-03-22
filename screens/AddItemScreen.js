import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import RenderCategoryList from '../component/AddItem/RenderCategoryList'


class AddItemScreen extends React.Component {
    constructor(props) {
        super(props)
    }



    componentDidMount() {
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: () => {
                return (
                    <></>
                )
            },
            headerLeft: () => {
                return (
                    <View style={{ marginLeft:10 }}>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    navigation.navigate('Search')
                                }
                            }
                        >
                            <Ionicons name={'ios-close'} size={50} color={'#28a745'} />
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    }

    render() {

        return (
            <Container>
                <Content>
                    <View style={{ flex:1 }}>
                        {
                            this.props.categories.data.map((category, index) => (
                                category.level == 1 ?
                                    <RenderCategoryList
                                        category={category}
                                        index={index}
                                        key={index}
                                        nextScreen={'categoryLevel2'}
                                        navigation={this.props.navigation}
                                    /> : null
                            ))
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.ads.categories,
    };
};

const mapDispatchToProps = {
};

export default  connect(mapStateToProps, mapDispatchToProps)(AddItemScreen);