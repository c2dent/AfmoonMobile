import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import StatusBarBackground from '../component/StatusBarBackground'
import { connect } from 'react-redux'
import { Button, Input } from 'react-native-elements'
import { setCurrentCategory, setCurrentRegion } from '../store/ExtendedSearch/actions'




class AdFilterOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible:false,
        }
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false
        }
    }


    render () {
        let chooseCategory = (this.props.navigation.getParam('category') ? this.props.navigation.getParam('category') : this.props.currentCategory)
        let chooseRegion = (this.props.navigation.getParam('region') ? this.props.navigation.getParam('region') : this.props.currentRegion)
        console.log(chooseCategory)
        return (
            <View style={{flex:1, backgroundColor: '#f7f4f4'}}>
                <View>
                    <StatusBarBackground style={{backgroundColor:'white'}} />
                </View>


                <View style={styles.headerFilter}>
                    <View style={{flex:1}}>

                    </View>
                    <View style={{flex:1, justifyContent: "center", alignItems: 'center'}}>
                        <Text style={{ fontSize:22 }}>
                            Филтерь
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        <View style={styles.closeModal}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.goBack()
                                }}
                            >
                                <Ionicons name={'ios-close'} size={50} color={'#28a745'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={{
                    marginTop:10,
                    marginBottom:10
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            padding: 10
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('CategoryFilter', {
                                level:1,
                                lft: 1,
                                rght:400
                            })
                        }}
                    >
                        <View>
                            <Text style={{ fontSize: 15, color: '#969494' }}>
                                Категория
                            </Text>
                            <Text style={{ fontSize:20 }}>
                                {chooseCategory.title }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    marginBottom:10,
                    marginTop:10
                }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            padding: 10
                        }}
                        onPress={() => {
                            this.props.navigation.navigate('regionFilter', {
                                level:1,
                                lft: 1,
                                rght:400
                            })
                        }}
                    >
                        <View>
                            <Text style={{ fontSize: 15, color: '#969494' }}>
                                Регион
                            </Text>
                            <Text style={{ fontSize:20 }}>
                                {chooseRegion.title }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>



                <View
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        placeholder='Цена, от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                    />
                </View>


                <View
                    style={{
                        marginBottom:10,
                    }}
                >
                    <Input
                        placeholder='Цена, до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                    />
                </View>



                <View style={styles.ToApplyFilter}>
                    <TouchableOpacity
                    onPress={() => {
                        if (this.props.navigation.getParam('category')) {
                            this.props.setCurrentCategory(this.props.navigation.getParam('category'))
                        } else if (this.props.navigation.getParam('region')) {
                            this.props.setCurrentRegion(this.props.navigation.getParam('region'))
                        }
                        this.props.navigation.navigate('ExtendedSearch')
                    }}
                    >
                        <Button
                            title='Применить'
                            buttonStyle={{
                                backgroundColor: '#28a745',
                                borderRadius:20,
                                width: '100%'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    closeModal: {
        alignItems: 'center',
        justifyContent:'center',
    },
    headerFilter: {
        display: "flex",
        flexDirection: 'row',
        paddingLeft:15,
        backgroundColor: 'white'
    },
    ToApplyFilter: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


const mapStateToProps = state => {
    return {
        currentCategory : state.extendedSearch.currentCategory,
        currentRegion : state.extendedSearch.currentRegion
    };
};

const mapDispatchToProps = {
    setCurrentCategory,
    setCurrentRegion
};

export default  connect(mapStateToProps, mapDispatchToProps)(AdFilterOptions);