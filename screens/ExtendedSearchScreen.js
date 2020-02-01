import React from 'react'
import Search from 'react-native-search-box'
import { View, Text } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


class ExtendedSearchScreen extends React.Component {
    constructor (props){
        super(props)
    }

    render() {
        return (
            <View>
                <View>
                    <Search
                        backgroundColor="white"
                        titleCancelColor="blue"
                        cancelTitle = 'Отменить'
                        iinputBorderRadius={7}
                        cancelButtonWidth={80}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AdFilterOptions')}
                    >
                        <Text style={{fontSize:23}}>
                            AppNavigation
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ExtendedSearchScreen;