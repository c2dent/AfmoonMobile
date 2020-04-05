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
import RenderForSelectItem from '../RenderForSelectItem'
import ChooseRegionList from '../FormCustomItem/ChooseRegionList'




class ResumeForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title:'',
            price: '',
            description:'',
            region: '',
            category:'',
            schedule:'',
            workExperience:'',
            gender:'',
            age:'',
            images: [],
            validPrice: false,
            validSchedule: false,
            validWorkExperience: false,
            validTitle: false,
            validRegion: false,
            validGender: false,
            validAge: false,
            publishButtonLoading: false,
            genderList: [
                [1, 'Мужской'],
                [2, 'Женский'],
            ]
        }
        this.Validation = this.Validation.bind(this)
        this.validImage = this.validImage.bind(this)
        this.generateArray = this.generateArray.bind(this)
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


    generateArray = (n) => [...Array(n)].map((_, index) => [index + 16]);

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
        if (!this.state.price) {
            this.setState({ validPrice: false })
            this.refs.priceInput.emptyInput()
        } else {
            this.setState({ validPrice: true })
        }
        if (!this.state.title) {
            this.setState({ validTitle: false })
            this.refs.titleInput.emptyInput()
        } else {
            this.setState({ validTitle: true })
        }
        !this.state.region ? this.refs.chooseRegion.emptyRegion() : this.setState({ validRegion: true })
        !this.state.schedule ? this.refs.scheduleSelect.emptySelect() : this.setState({ validSchedule: true })
        !this.state.workExperience ? this.refs.workExperienceSelect.emptySelect() : this.setState({ validWorkExperience: true })
        !this.state.gender ? this.refs.genderSelect.emptySelect() : this.setState({ validGender: true })
        !this.state.age ? this.refs.ageSelect.emptySelect() : this.setState({ validAge: true })

        if (this.state.validPrice && this.state.validRegion && this.state.validTitle &&
            this.state.validSchedule && this.state.validWorkExperience && this.state.validGender && this.state.validAge) {
            this.setState({ publishButtonLoading: true})
            const data = new FormData();
            data.append('title', this.state.title)
            data.append('work_experience', this.state.workExperience)
            data.append('schedule', this.state.schedule)
            data.append('gender', this.state.gender)
            data.append('age', this.state.age)
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
            console.log(this.state.validTitle)
            console.log(this.state.validPrice)
            console.log(this.state.validRegion)
            console.log(this.state.validSchedule)
            console.log(this.state.validWorkExperience)
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


                <RenderForSelectItem
                    whatChoose='График работы'
                    itemList= { this.props.schedule }
                    setItem={ (item) => this.setState({ schedule: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='scheduleSelect'
                />


                <RenderForSelectItem
                    whatChoose='Опыть работы'
                    itemList= { this.props.workExperience }
                    setItem={ (item) => this.setState({ workExperience: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='workExperienceSelect'
                />


                <RenderForSelectItem
                    whatChoose='Поль'
                    itemList= { this.state.genderList }
                    setItem={ (item) => this.setState({ gender: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={1}
                    ref='genderSelect'
                />


                <RenderForSelectItem
                    whatChoose='Возраст'
                    itemList= { this.generateArray(38) }
                    setItem={ (item) => this.setState({ age: item[0] })}
                    navigation={ this.props.navigation }
                    renderIndex={0}
                    ref='ageSelect'
                />



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
        schedule: state.general.scheduleGeneral.data,
        workExperience: state.general.workExperienceGeneral.data,
    };
};

const mapDispatchToProps = {
    addNewItem,
};

export default  connect(mapStateToProps, mapDispatchToProps)(ResumeForm);