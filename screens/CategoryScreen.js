import React from 'react'
import { Text, View } from 'native-base';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';


class CategoryScreen extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            categories: [],
        }

        this.filterCategories = this.filterCategories.bind(this)
    }

    filterCategories = () => {
        this.props.categories.map(category => {
            if (category.level == this.props.navigation.getParam('level')
                && category.lft > this.props.navigation.getParam('lft')
                && category.rght < this.props.navigation.getParam('rght')) {
                    this.state.categories.push(category)
            }
        })
    }

    render() {
        let nextScreen = ''
        if (this.props.navigation.state.routeName == "Category") {
            nextScreen = 'categoryLevelSecond'
        } else if (this.props.navigation.state.routeName == "categoryLevelSecond") {
            nextScreen = "categoryLevelTird"
        } else if (this.props.navigation.state.routeName == "categoryLevelTird") {
            nextScreen = "categoryLevelFourth"
        }


        this.filterCategories()

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
                        this.state.categories.map(category => (
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
                                            this.props.navigation.navigate(nextScreen, {
                                                rght: category.rght,
                                                lft: category.lft,
                                                level: category.level + 1
                                            })
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

export default CategoryScreen;