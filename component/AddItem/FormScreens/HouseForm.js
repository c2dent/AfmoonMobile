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




class HouseForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            price: '',
            description:'',
            region: '',
            category:'',
            houseArea:'',
            landArea:'',
            images: [],
            validPrice: false,
            validImages: false,
            validRegion: false,
            validHouseArea: false,
            validLandArea: false,
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
        if (!this.state.landArea) {
            this.setState({ validLandArea: false })
            this.refs.landAreaInput.emptyInput()
        } else {
            this.setState({ validLandArea: true })
        }
        if (!this.state.houseArea) {
            this.setState({ validHouseArea: false })
            this.refs.houseAreaInput.emptyInput()
        } else {
            this.setState({ validHouseArea: true })
        }
        if (!this.state.price) {
            this.setState({ validPrice: false })
            this.refs.priceInput.emptyInput()
        } else {
            this.setState({ validPrice: true })
        }
        if (images.length < 1) {
            this.setState({ validImages: false })
            alert('Добавте пожалуюста хотябы одну фото')
        } else {
            this.setState({ validImages: true })
        }
        !this.state.region ? this.refs.chooseRegion.emptyRegion() : this.setState({ validRegion: true })

        if (this.state.validPrice && this.state.validImages && this.state.validRegion &&
            this.state.validHouseArea && this.state.validLandArea) {
            this.setState({ publishButtonLoading: true})
            const data = new FormData();
            data.append('title', this.state.houseArea)
            data.append('house_area', this.state.houseArea)
            data.append('land_area', this.state.landArea)
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
        } else {
            console.log(this.state.validationTitle)
            console.log(this.state.validationPrice)
            console.log(this.state.validationImages)
            console.log(this.state.validationRegion)
            console.log(this.state.validLandArea)
            console.log(this.state.validHouseArea)
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
                    <CustomNumberInput
                        placeholder="Площадь участка"
                        onChangeText={(number) => this.setState({ landArea: number})}
                        ref="landAreaInput"
                    />
                </View>



                <View>
                    <CustomNumberInput
                        placeholder="Площадь дома"
                        onChangeText={(number) => this.setState({ houseArea: number})}
                        ref="houseAreaInput"
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

export default  connect(mapStateToProps, mapDispatchToProps)(HouseForm);