import React from 'react'
import { Content } from 'native-base'
import { View, TouchableOpacity } from 'react-native'
import CustomNumberInput from '../FormCustomItem/CustomNumberInput'
import CustomTextAreaInput from '../FormCustomItem/CustomTextAreaInput'
import CustomInputImage from '../FormCustomItem/CustomInputImage'
import { Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { addNewItem } from '../../../store/AddItem/actions'
import ViewPhoneNumber from '../FormCustomItem/ViewPhoneNumber'
import ChooseRegionList from '../FormCustomItem/ChooseRegionList'
import RenderForSelectItem from '../RenderForSelectItem'



class ApartmentForm extends React.Component{
    constructor(props){
        super(props)


        this.state = {
            price: '',
            description:'',
            region: '',
            category:'',
            images: [],
            floorsInHouse:'',
            floor:'',
            numberRooms:'',
            totalArea:'',
            rentBuy:'',
            validPrice: false,
            validImages: false,
            validRegion: false,
            validFloorsInHouse: false,
            validNumberRooms: false,
            validTotalArea: false,
            validFloor: false,
            validRentBuy: false,
            publishButtonLoading: false,
            rentBuyList: [
                [1, 'Продается'],
                [2, 'Сдается'],
            ]
        }


        this.Validation = this.Validation.bind(this)
        this.validImage = this.validImage.bind(this)
        this.generateArray = this.generateArray.bind(this)
        this.setDefaultValue = this.setDefaultValue.bind(this)
        this.setRegionDefaultValue = this.setRegionDefaultValue.bind(this)
    }


    componentDidMount() {
        if (this.props.navigation.getParam('UserAdDetail')) {
            const UserAdDetail = this.props.navigation.getParam('UserAdDetail').data
            this.setState({price: UserAdDetail.price})
            this.setState({description: UserAdDetail.description})
            this.setState({floorsInHouse: UserAdDetail.floors_in_house})
            this.setState({floor: UserAdDetail.floor})
            this.setState({numberRooms: UserAdDetail.number_rooms})
            this.setState({totalArea: UserAdDetail.total_area})
            this.setState({rentBuy: UserAdDetail.rent_buy})
            this.setState({region: this.setRegionDefaultValue(UserAdDetail.region)})
        }
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

    setRegionDefaultValue = (id) => {
        let regionReturn = ''
        this.props.regions.map((region) => {
            if (region.id == id) {
                regionReturn = region
            }
        })
        return regionReturn
    }

    setDefaultValue = (itemList, value) => {
        let itemReturn = ''
        itemList.map((item) => {
            if (item[0] == value) {
                itemReturn = item
            }
        })

        return itemReturn
    }

    setDefaultImages = (images) => {
        let imgUris = []
        images.map((image) => {
            imgUris.push('http://192.168.1.9:8000' + image.image)
        })

        return imgUris
    }


    generateArray = (n) => [...Array(n)].map((_, index) => [index + 1]);

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
        !this.state.region ? this.refs.chooseRegion.emptyRegion() : this.setState({ validRegion: true })
        !this.state.floorsInHouse ? this.refs.floorsInHouseSelect.emptySelect() : this.setState({ validFloorsInHouse: true })
        !this.state.floor ? this.refs.floorSelect.emptySelect() : this.setState({ validFloor: true })
        !this.state.numberRooms ? this.refs.numberRoomsSelect.emptySelect() : this.setState({ validNumberRooms: true })
        !this.state.rentBuy ? this.refs.rentBuySelect.emptySelect() : this.setState({ validRentBuy: true })
        if (!this.state.totalArea) {
            this.refs.totalAreaInput.emptyInput()
            this.setState({ validTotalArea: false })
        } else {
            this.setState({ validTotalArea: true })
        }
        if (!this.state.price) {
            this.refs.priceInput.emptyInput()
            this.setState({ validPrice: false })
        } else {
            this.setState({ validPrice: true })
        }
        if (images.length < 1) {
            this.setState({ validImages: false })
            alert('Добавте пожалуюста хотябы одну фото')
        } else {
            this.setState({ validImages: true })
        }

        if (this.state.validPrice && this.state.validImages && this.state.validRegion &&
            this.state.validFloorsInHouse && this.state.validFloor && this.state.validNumberRooms &&
            this.state.validRentBuy && this.state.validTotalArea ) {
            this.setState({ publishButtonLoading: true})
            const data = new FormData();
            data.append('title', this.state.numberRooms + ',' + this.state.totalArea)
            data.append('floors_in_house', this.state.floorsInHouse)
            data.append('floor', this.state.floor)
            data.append('number_rooms', this.state.numberRooms)
            data.append('total_area', this.state.totalArea)
            data.append('rent_buy', this.state.rentBuy == 1 ? true : false)
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
            alert('Произашло какой то ошибка')
        }
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

    render() {

        const defaultValue = this.props.navigation.getParam('UserAdDetail').data ? this.props.navigation.getParam('UserAdDetail').data : ''
        return (
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
                        defaultValue={defaultValue ? this.setDefaultImages(defaultValue.images) : []}
                    />
                </View>




                <RenderForSelectItem
                    whatChoose='Этажы в доме'
                    itemList= { this.generateArray(15) }
                    setItem={ (item) => this.setState({ floor: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={0}
                    ref='floorsInHouseSelect'
                    defaultValue={defaultValue ? this.setDefaultValue(this.generateArray(15), defaultValue.floor) : ''}
                />


                <RenderForSelectItem
                    whatChoose='Этаж'
                    itemList= { this.generateArray(15) }
                    setItem={ (item) => this.setState({ floorsInHouse: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={0}
                    ref='floorSelect'
                    defaultValue={defaultValue ? this.setDefaultValue(this.generateArray(15), defaultValue.floors_in_house) : ''}
                />


                <RenderForSelectItem
                    whatChoose='Количество комнат'
                    itemList={ this.props.numberRooms }
                    setItem={ (item) => this.setState({ numberRooms: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='numberRoomsSelect'
                    defaultValue={defaultValue ? this.setDefaultValue(this.props.numberRooms, defaultValue.number_rooms) : ''}
                />


                <RenderForSelectItem
                    whatChoose='Тип продаж'
                    itemList={ this.state.rentBuyList }
                    setItem={ (item) => this.setState({ rentBuy: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='rentBuySelect'
                    defaultValue={defaultValue ? this.setDefaultValue(this.state.rentBuyList, defaultValue.rent_buy ? 1 : 2) : ''}
                />




                <View>
                    <CustomNumberInput
                        placeholder="Общая площадь"
                        onChangeText={(number) => this.setState({ totalArea: number})}
                        ref="totalAreaInput"
                        defaultValue={this.state.totalArea.toString()}
                    />
                </View>


                <View>
                    <CustomNumberInput
                        placeholder="Цена"
                        onChangeText={(number) => this.setState({ price: number})}
                        ref="priceInput"
                        defaultValue={this.state.price.toString()}
                    />
                </View>


                <View>
                    <CustomTextAreaInput
                        placeholder="Описания"
                        onChangeText={(text) => this.setState({ description: text})}
                        defaultValue={this.state.description}
                    />
                </View>


                <View>
                    <ChooseRegionList
                        defaultValue={ this.state.region ? this.state.region : defaultValue ? this.setRegionDefaultValue(defaultValue.region) : ''}
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
        profile: state.profile.profile,
        numberRooms: state.general.numberRoomsGeneral.data,
    };
};

const mapDispatchToProps = {
    addNewItem,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ApartmentForm);
