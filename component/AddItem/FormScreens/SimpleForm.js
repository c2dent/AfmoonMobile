import React from 'react'
import { Content } from 'native-base'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomTextInput from '../FormCustomItem/CustomTextInput'
import CustomNumberInput from '../FormCustomItem/CustomNumberInput'
import CustomTextAreaInput from '../FormCustomItem/CustomTextAreaInput'
import CustomInputImage from '../FormCustomItem/CustomInputImage'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { addNewItem } from '../../../store/AddItem/actions'




class SimpleForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title: '',
            price: '',
            description:'',
            region: '',
            category:'',
            images: [],
            validationTitle: false,
            validationPrice: false,
            validationImages: false,
            validationRegion: false,
            colorRegion: '#969494',
            publishButtonLoading: false,
        }
        this.RegionList = this.RegionList.bind(this)
        this.validation = this.validation.bind(this)
        this.validImage = this.validImage.bind(this)
    }


    RegionList = () => {
        let regions =[]
        this.props.regions.map((region) => {
            if (region.lft + 1 == region.rght) {
                regions.push(region)
            }
        })
        return regions
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
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name={'ios-arrow-back'} size={30} color={'blue'} />
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    }

    validImage = () => {
        let imgs =[]

        this.state.images.map((image) => {
            if (image) {
                imgs.push(image)
            }
        })

        return imgs
    }


    validation = () => {
        this.setState({ publishButtonLoading: true})
        let images = this.validImage()
        if (!this.state.title) {
            this.refs.titleInput.emptyInput()
        } else {
            this.setState({ validationTitle: true})
        }
        if (!this.state.price) {
            this.refs.priceInput.emptyInput()
        } else {
            this.setState({ validationPrice: true })
        }
        if (images.length < 1) {
            alert('Добавте пожалуюста хотябы одну фото')
        } else {
            this.setState({ validationImages: true })
        }
        if (!this.state.region) {
            this.setState({ colorRegion: 'red'})
        } else {
            this.setState({ validationRegion: true })
        }

        if (this.state.validationTitle && this.state.validationPrice && this.state.validationImages && this.state.validationRegion) {
            const data = new FormData();
            data.append('title', this.state.title)
            data.append('price', this.state.price)
            data.append('description', this.state.description)
            data.append('category' ,this.props.navigation.getParam('category').id)
            data.append('region', this.state.region.id)
            data.append('user', this.props.profile.id)
            data.append('size', '5')
            this.state.images.forEach((image, index) => {
                data.append('images[]', {
                    uri: image,
                    type: 'image/jpg',
                    name: 'img' + index + 'jpg'
                })
            })
            this.props.addNewItem(data)
                .then((response) => {
                    if (response.status == 201) {
                        this.setState({ publishButtonLoading: false })
                        this.navigation.navigate('addItem')
                    } else {
                        alert('Извините что-то пошло не так повторите попытку позже')
                    }
                })
        }
    }


    render() {

        return(
            <Content>


                <View
                    style={{ backgroundColor: 'white'}}
                >
                    <CustomInputImage
                        setImageList = {(imgList) => {
                            this.setState(state => {
                                const images = imgList
                                return {
                                    ...state,
                                    images
                                }
                            })
                        }}
                    />
                </View>



                <View>
                    <CustomTextInput
                        placeholder="Названия"
                        onChangeText={(text) => this.setState({ title: text})}
                        ref="titleInput"
                    />
                </View>


                <View>
                    <CustomNumberInput
                        placeholder="Цена"
                        onChangeText={(number) => this.setState({ price: number})}
                        ref="priceInput"
                    />
                </View>


                <View>
                    <CustomTextAreaInput
                        placeholder="Описания"
                        onChangeText={(text) => this.setState({ description: text})}
                    />
                </View>


                <View
                    style={{
                        backgroundColor: 'white',
                        marginTop:30,
                        padding:10
                    }}
                >
                    <TouchableOpacity
                        style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection: 'row'}}
                        onPress={() => this.props.navigation.navigate('chooseItem', {
                            itemList: this.RegionList(),
                            setRegion: (region) => this.setState({ region: region}),
                            defaultValue: this.state.region
                        })}
                    >
                        <View
                            style={{display:'flex', justifyContent:'flex-start', alignItems:'center' , flexDirection: 'row'}}
                        >
                            <Ionicons name={'ios-locate'} size={23} color={'black'} />
                            <Text
                                style={{
                                    fontSize:20,
                                    color:'#969494',
                                    marginLeft:5,
                                }}
                            >
                                {
                                    this.state.region ?
                                        <Text style={{fontSize:20, color:'black', marginLeft:5}}>{ this.state.region.title }</Text> :
                                        <Text style={{fontSize:20, color:this.state.colorRegion , marginLeft:5}}>Место встречи</Text>
                                }

                            </Text>
                        </View>
                        <Ionicons name={'ios-arrow-forward'} size={20} color={'black'} style={{ marginRight:5 }} />
                    </TouchableOpacity>
                </View>


                <View>
                    <View
                        style={{
                            backgroundColor: 'white',
                            marginTop:15,
                            paddingLeft:10,
                            paddingBottom:5,
                            paddingTop:5,
                        }}
                    >
                        <Text
                            style={{ color:'#969494', fontSize: 14}}
                        >
                            Номер телефона
                        </Text>
                        <Text style={{ fontSize: 21 }}>
                            {
                                this.props.profile.phone_number
                            }
                        </Text>
                    </View>
                </View>



                <View
                    style={{
                        marginTop:20,
                        marginBottom:20,
                        padding:10,
                    }}
                >
                    <Button
                        title='Опубликовать'
                        onPress={() => {
                            this.validation()
                        }}
                        buttonStyle= {{
                            backgroundColor: '#28a745',
                            borderRadius: 5,
                            width: '100%',
                        }}
                        loading={this.state.publishButtonLoading}
                    />
                </View>

            </Content>
        )
    }
}

const mapStateToProps = state => {
    return {
        regions: state.ads.regions.data,
        profile: state.profile.profile
    };
};

const mapDispatchToProps = {
    addNewItem,
};

export default  connect(mapStateToProps, mapDispatchToProps)(SimpleForm);