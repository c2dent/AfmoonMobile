import React from 'react'
import { Text, View } from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';


class ChooseCategoryScreen extends React.Component {
    constructor (props){
        super(props)
    }

    componentDidMount() {
        this.props.getCategory(this.props.navigation.getParam('level'), this.props.navigation.getParam('rght'), this.props.navigation.getParam('lft'))
    }

    render() {
        let category = ''
        const { isLoaded, isLoading, navigation } = this.props;
        if (navigation.state.routeName == "ChooseCategory") {
            category = this.props.categoryLevelFirst
        } else if (navigation.state.routeName == "ChooseCategory2") {
            category = this.props.categoryLevelSecond
        } else if (navigation.state.routeName == "ChooseCategory3") {
            category = this.props.categoryLevelTird
        } else if (navigation.state.routeName == "ChooseCategory4") {
            category = this.props.categoryLevelFourth
        }
        if (isLoading) return <Text>Пожалуюста подождите</Text>
        if (!isLoaded || !category) return null;

        return (
            <View style={{ flex:1, marginLeft:10, marginRight:10 }}>
                <ScrollView>
                    <TouchableOpacity
                        style={{
                            paddingBottom:18,
                            paddingTop:18,
                            paddingLeft:10,
                            paddingRight:10,
                            backgroundColor: 'white',
                            marginBottom:2
                        }}
                        onPress={() => {
                            this.props.navigation.goBack()
                        }}
                    >
                        <View>
                            <Text style={{
                                fontSize:20,
                            }}>
                                Назад
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            paddingBottom:18,
                            paddingTop:18,
                            paddingLeft:10,
                            paddingRight:10,
                            backgroundColor: 'white',
                            marginBottom:2
                        }}
                    >
                        <View>
                            <Text style={{
                                fontSize:20,
                            }}>
                                Все категории
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {
                        category.map(category => (
                            <TouchableOpacity
                                style={{
                                    paddingBottom:18,
                                    paddingTop:18,
                                    paddingLeft:10,
                                    paddingRight:10,
                                    backgroundColor: 'white',
                                    marginBottom:2
                                }}
                                key={category.slug}
                                onPress={() =>
                                    {
                                        if (category.rght-category.lft>1) {
                                            this.props.navigation.navigate('ChooseCategory' + (category.level + 1), {
                                                rght: category.rght,
                                                lft: category.lft,
                                                level: category.level + 1
                                            })
                                        } else {
                                            if (this.props.screenWichCallChooseCategory == 'Home') {
                                                this.props.navigation.navigate('ExtendedSearch')
                                            } else {
                                                this.props.navigation.navigate(this.props.screenWichCallChooseCategory)
                                            }
                                        }
                                    }
                                }
                            >
                                <View>
                                    <Text style={{
                                        fontSize:20,
                                    }}>
                                        { category.title }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default ChooseCategoryScreen;