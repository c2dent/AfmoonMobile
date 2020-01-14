import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from 'react-native-elements'


export default class SearchScreen extends Component
{
    render()
    {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text style={{ fontSize:40 }}>
                    SearchScreen
                </Text>
            </View>
        );
    }
}