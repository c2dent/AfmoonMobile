import React from 'react'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import RenderCategoryList from './RenderCategoryList'
import { connect } from 'react-redux'


class CategoryLevel2 extends React.Component {
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
                                category.level == 2 &&
                                    category.lft > this.props.navigation.getParam('lft') &&
                                    category.rght < this.props.navigation.getParam('rght')  ?
                                    <RenderCategoryList
                                        category={category}
                                        index={index}
                                        key={index}
                                        nextScreen={'categoryLevel3'}
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

export default  connect(mapStateToProps, mapDispatchToProps)(CategoryLevel2);