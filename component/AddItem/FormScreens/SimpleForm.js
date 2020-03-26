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
import ViewPhoneNumber from '../FormCustomItem/ViewPhoneNumber'
import ChooseRegionList from '../FormCustomItem/ChooseRegionList'




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
            publishButtonLoading: false,
        }
        this.Validation = this.Validation.bind(this)
        this.validImage = this.validImage.bind(this)
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


    Validation = () => {
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
            this.refs.chooseRegion.emptyRegion()
        } else {
            this.setState({ validationRegion: true })
        }

        if (this.state.validationTitle && this.state.validationPrice && this.state.validationImages && this.state.validationRegion) {
            this.setState({ publishButtonLoading: true})
            const data = new FormData();
            data.append('title', this.state.title)
            data.append('price', this.state.price)
            data.append('description', this.state.description)
            data.append('category' ,this.props.navigation.getParam('category').id)
            data.append('region', this.state.region.id)
            data.append('user', this.props.profile.id)
            this.state.images.forEach((image, index) => {
                data.append('images[]', {
                    uri: image,
                    type: 'image/jpg',
                    name: 'img' + index + 'jpg'
                })
            })
            this.props.addNewItem(data)
                .then((response) => {
                    this.setState({ publishButtonLoading: false })
                    if (response.status == 201) {
                        this.props.navigation.navigate('addItem')
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


                <View>
                    <ChooseRegionList
                        defaultValue={ this.state.region}
                        regions={ this.props.regions }
                        navigation={ this.props.navigation}
                        setRegion={ (region) => this.setState({ region: region })}
                        ref="chooseRegion"
                    />
                </View>

                <View>
                    <ViewPhoneNumber phone_number={ this.props.profile.phone_number } />
                </View>



                <View
                    style={{
                        marginTop:20,
                        marginBottom:20,
                        padding:10,
                    }}
                >
                    <Button
                        onPress={() => this.Validation()}
                        title='Опубликовать'
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