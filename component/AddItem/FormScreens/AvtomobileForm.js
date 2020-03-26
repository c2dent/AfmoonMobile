import React from 'react'
import { Content } from 'native-base'
import { View, Text, TouchableOpacity } from 'react-native'
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



class AvtomobileForm extends React.Component{
    constructor(props){
        super(props)


        this.state = {
            price: '',
            description:'',
            region: '',
            category:'',
            images: [],
            mark:'',
            modelName:'',
            modelList:'',
            model:'',
            gearShift:'',
            bodyType:'',
            engineType: '',
            driveUnit: '',
            condition:'',
            isMileage:'',
            mileage:'',
            yearIssue:'',
            validationModel: false,
            validationGearShift: false,
            validationBodyType: false,
            validationEngineType:false,
            validationDriveUnit: false,
            validationCondition: false,
            validationIsMileage: false,
            validationMileage: false,
            validationYearIssue: false,
            validationPrice: false,
            validationImages: false,
            validationRegion: false,
            publishButtonLoading: false,
            conditionList: [
                [true, 'Не битый'],
                [false, 'Битый'],
            ],
            isMileageList: [
                [true, 'Новый'],
                [false,'С пробегом']
            ]
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
        if (!this.state.modelList) {
            this.refs.markSelect.emptySelect()
        } else {
            if (!this.state.model) {
                this.refs.modelSelect.emptySelect()
            } else {
                this.setState({ validationModel: true })
            }
        }
        !this.state.gearShift ? this.refs.gearShiftSelect.emptySelect() : this.setState({ validationGearShift: true })
        !this.state.bodyType ? this.refs.bodyTypeSelect.emptySelect() : this.setState({ validationBodyType: true })
        !this.state.engineType ? this.refs.engineTypeSelect.emptySelect() : this.setState({ validationEngineType: true })
        !this.state.driveUnit ? this.refs.driveUnitSelect.emptySelect() : this.setState({ validationDriveUnit: true})
        !this.state.condition ? this.refs.conditionSelect.emptySelect() : this.setState({ validationCondition: true })
        !this.state.isMileage ? this.refs.isMileageSelect.emptySelect() : this.setState({ validationIsMileage: true })
        !this.state.region ? this.refs.chooseRegion.emptyRegion() : this.setState({ validationRegion: true })
        if (!this.state.mileage) {
            this.refs.mileageInput.emptyInput()
            this.setState({ validationMileage: false})
        } else {
            this.setState({ validationMileage: true})
        }
        if (!this.state.yearIssue) {
            this.refs.yearIssueInput.emptyInput()
            this.setState({ validationYearIssue: false})
        } else {
            this.setState({ validationYearIssue: true})
        }
        if (!this.state.price) {
            this.refs.priceInput.emptyInput()
            this.setState({ validationPrice: false })
        } else {
            this.setState({ validationPrice: true })
        }
        if (images.length < 1) {
            this.setState({ validationImages: false })
            alert('Добавте пожалуюста хотябы одну фото')
        } else {
            this.setState({ validationImages: true })
        }

        if (this.state.validationPrice && this.state.validationImages && this.state.validationRegion &&
            this.state.validationModel && this.state.validationYearIssue && this.state.validationGearShift &&
            this.state.validationEngineType && this.state.validationMileage && this.state.validationDriveUnit &&
            this.state.validationCondition && this.state.validationIsMileage && this.state.validationBodyType) {
            this.setState({ publishButtonLoading: true})
            const data = new FormData();
            data.append('title', this.state.mark + ' ' + this.state.modelName + ', ' + this.state.yearIssue )
            data.append('mark_model', this.state.model)
            data.append('year_issue', this.state.yearIssue)
            data.append('gear_shift', this.state.gearShift)
            data.append('body_type', this.state.bodyType)
            data.append('engine_type', this.state.engineType)
            data.append('mileage', this.state.mileage)
            data.append('drive_unit', this.state.driveUnit)
            data.append('condition', this.state.condition)
            data.append('isMileage', this.state.isMileage)
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
            console.log(this.state.validationPrice)
            console.log(this.state.validationImages)
            console.log(this.state.validationRegion)
            console.log(this.state.validationModel)
            console.log(this.state.validationYearIssue)
            console.log(this.state.validationGearShift)
            console.log(this.state.validationDriveUnit)
            console.log(this.state.validationMileage)
            console.log(this.state.validationCondition)
            console.log(this.state.validationEngineType)
            console.log(this.state.validationIsMileage)
            console.log(this.state.validationBodyType)
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
                    />
                </View>


                <RenderForSelectItem
                    whatChoose='Марка'
                    itemList={ this.props.markModel }
                    setItem={ (item) => {
                        this.setState({ modelList: item[1] }),
                        this.setState({ mark: item[0] })
                        this.setState({ model: '' })
                    }}
                    navigation={ this.props.navigation }
                    renderIndex={0}
                    ref='markSelect'
                />

                {
                    this.state.modelList ?
                        <RenderForSelectItem
                            whatChoose='Модель'
                            itemList={ this.state.modelList }
                            setItem={ (item) => {
                                this.setState({ model: item[0] })
                                this.setState({ modelName: item[1] })
                            }}
                            navigation={ this.props.navigation }
                            renderIndex={1}
                            ref='modelSelect'
                        /> : null
                }

                <RenderForSelectItem
                    whatChoose='Коробка передач'
                    itemList={ this.props.gearShift }
                    setItem={ (item) => this.setState({ gearShift: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref="gearShiftSelect"
                />


                <RenderForSelectItem
                    whatChoose='Тип кузова'
                    itemList={ this.props.bodyType }
                    setItem={ (item) => this.setState({ bodyType: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='bodyTypeSelect'
                />


                <RenderForSelectItem
                    whatChoose='Тип двигателя'
                    itemList={ this.props.engineType }
                    setItem={ (item) => this.setState({ engineType: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='engineTypeSelect'
                />


                <RenderForSelectItem
                    whatChoose='Привод'
                    itemList={ this.props.driveUnit }
                    setItem={ (item) => this.setState({ driveUnit: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='driveUnitSelect'
                />



                <RenderForSelectItem
                    whatChoose='Тип автомобиля'
                    itemList={ this.state.isMileageList }
                    setItem={ (item) => this.setState({ isMileage: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='isMileageSelect'
                />


                <RenderForSelectItem
                    whatChoose='Состояние'
                    itemList={ this.state.conditionList }
                    setItem={ (item) => this.setState({ condition: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='conditionSelect'
                />



                <View>
                    <CustomNumberInput
                        placeholder="Год выпуска"
                        onChangeText={(number) => this.setState({ yearIssue: number})}
                        ref="yearIssueInput"
                    />
                </View>



                <View>
                    <CustomNumberInput
                        placeholder="Пробег"
                        onChangeText={(number) => this.setState({ mileage: number})}
                        ref="mileageInput"
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
        profile: state.profile.profile,
        markModel: state.general.markGeneral.data,
        gearShift: state.general.gearShiftGeneral.data,
        bodyType: state.general.bodyTypeGeneral.data,
        engineType: state.general.engineTypeGeneral.data,
        driveUnit: state.general.driveUnitGeneral.data,
    };
};

const mapDispatchToProps = {
    addNewItem,
};

export default  connect(mapStateToProps, mapDispatchToProps)(AvtomobileForm);
