import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import StatusBarBackground from '../component/StatusBarBackground'
import { connect } from 'react-redux'
import { Button, Input, CheckBox } from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import AdditionalFilter from '../component/AdditionalFilter'
import { setCurrentCategory,
            setCurrentRegion,
            setPriceFrom,
            setPriceUp,
            setOrder,
            setGender,
            setAgeFrom,
            setAgeUp,
            setHouseAreaFrom,
            setHouseAreaUp,
            setLandAreaFrom,
            setLandAreaUp,
            setSchedule,
            setWorkExperience,
            setFloorsInHouseFrom,
            setFloorsInHouseUp,
            setFloorFrom,
            setFloorUp,
            setTotalAreaFrom,
            setTotalAreaUp,
            setNumberRooms,
            setRentBuy,

            setGearShift,
            setBodyType,
            setDriveUnit,
            setEngineType,
            setMark,
            setModel,
            setYearIssueFrom,
            setYearIssueUp,
            setMileageFrom,
            setMileageUp,
            setCondition
            } from '../store/ExtendedSearch/actions'



// const AdditionalFilter = (props) => {


//     const radio_func = (array) => {
//         set_array = []
//         array.map((item) => {
//             set_array.push({'label':item[1], 'value':item[0]})
//         })
//         return set_array
//     }


//     if (props.category.id == 172) {  //Avtomobil
//         const setBodyType = (data) => {
//             props.setValueBodyType(data[0])
//             body_type = data[1]
//             console.log(body_type)
//         }
//         let body_type = ''
//         let mark = ''
//         return (
//             <View>

//                 <TouchableOpacity   // MARK
//                     style={{
//                         paddingBottom:18,
//                         paddingTop:18,
//                         paddingLeft:10,
//                         paddingRight:10,
//                         backgroundColor: 'white',
//                         marginBottom:2
//                     }}
//                     onPress={() => {
//                         props.navigation.navigate('chooseAsList', {
//                             data:props.bodyTypeGeneral,
//                             setBodyType: (data) => setBodyType(data)
//                         })
//                     }}
//                 >
//                     <View>
//                         <Text style={{
//                             fontSize:20,
//                         }}>
//                             {mark ? mark : 'Марка'}
//                         </Text>
//                     </View>
//                 </TouchableOpacity>




//                 <TouchableOpacity   // BODY TYPE
//                         style={{
//                             paddingBottom:18,
//                             paddingTop:18,
//                             paddingLeft:10,
//                             paddingRight:10,
//                             backgroundColor: 'white',
//                             marginBottom:2
//                         }}
//                         onPress={() => {
//                             props.navigation.navigate('chooseAsList', {
//                                 data:props.bodyTypeGeneral,
//                                 setBodyType: (data) => setBodyType(data)
//                             })
//                         }}
//                     >
//                         <View>
//                             <Text style={{
//                                 fontSize:20,
//                             }}>
//                                 {body_type ? body_type : 'Тип кузова'}
//                             </Text>
//                         </View>
//                     </TouchableOpacity>


//             </View>
//         )
//     } else if (props.category.id == 169) {  //Apartment
//         var number_rooms_props = radio_func(props.numberRoomsGeneral)
//         return (
//             <View>
//                 <View  // floors in House
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueFloorsInHouseFrom(text)}
//                         placeholder='Этажы в доме от'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.floorsInHouseFrom}
//                     />
//                 </View>


//                 <View  // floors in House
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueFloorsInHouseUp(text)}
//                         placeholder='Этажы в доме до'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.floorsInHouseUp}
//                     />
//                 </View>


//                 <View  // floorFrom
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueFloorFrom(text)}
//                         placeholder='Этаж от'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.floorFrom}
//                     />
//                 </View>


//                 <View  // floorUp
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueFloorUp(text)}
//                         placeholder='Этаж до'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.floorUp}
//                     />
//                 </View>


//                 <View  // TotalAreaFrom
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueTotalAreaFrom(text)}
//                         placeholder='Общая площадь от'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.totalAreaFrom}
//                     />
//                 </View>


//                 <View  // TotalAreaUp
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueTotalAreaUp(text)}
//                         placeholder='Общая площадь до'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.totalAreaUp}
//                     />
//                 </View>


//                 <View style={{marginBottom:15}}>
//                     <View style={{ backgroundColor: 'white', padding: 10}}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
//                             <Text style={{ fontSize: 18, color: '#969494' }}>
//                                 Количество комнат
//                             </Text>
//                         </View>
//                         <View>
//                             <RadioForm
//                                 radio_props={number_rooms_props}
//                                 initial={props.numberRooms}
//                                 buttonColor={'#28a745'}
//                                 onPress={(value) => {props.setValueNumberRooms(value)}}
//                                 selectedButtonColor={'#28a745'}
//                                 buttonSize={18}
//                                 labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
//                                 selectedLabelColor={'#28a745'}
//                             />
//                         </View>
//                     </View>
//                 </View>


//             </View>
//         )
//     } else if (props.category.id == 170) {  //Houe
//         return (
//             <View>

//                 <View  // HouseAreaFrom
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueHouseAreaFrom(text)}
//                         placeholder='Площадь дома от'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.houseAreaFrom}
//                     />
//                 </View>


//                 <View  // HouseAreaUp
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueHouseAreaUp(text)}
//                         placeholder='Площадь дома до'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.houseAreaUp}
//                     />
//                 </View>


//                 <View  // LandAreaFrom
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueLandAreaFrom(text)}
//                         placeholder='Площадь участка от'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.landAreaFrom}
//                     />
//                 </View>


//                 <View  // LandAreaUp
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueLandAreaUp(text)}
//                         placeholder='Площадь участка до'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.landAreaUp}
//                     />
//                 </View>

//             </View>
//         )
//     } else if (props.category.id == 167) {  //  VACANCY
//         var schedule_props = radio_func(props.schedule)
//         var work_experience_props = radio_func(props.workExperience)
//         return (
//             <View>
//                 <View style={{marginBottom:15}}>
//                     <View style={{ backgroundColor: 'white', padding: 10}}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
//                             <Text style={{ fontSize: 18, color: '#969494' }}>
//                                 Опыть работы
//                             </Text>
//                         </View>
//                         <View>
//                             <RadioForm
//                                 radio_props={work_experience_props}
//                                 initial={props.gender}
//                                 buttonColor={'#28a745'}
//                                 onPress={(value) => {props.setValueWorkExperience(value)}}
//                                 selectedButtonColor={'#28a745'}
//                                 buttonSize={18}
//                                 labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
//                                 selectedLabelColor={'#28a745'}
//                             />
//                         </View>
//                     </View>
//                 </View>


//                 <View style={{marginBottom:15}}>
//                     <View style={{ backgroundColor: 'white', padding: 10}}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
//                             <Text style={{ fontSize: 18, color: '#969494' }}>
//                                 График работы
//                             </Text>
//                         </View>
//                         <View>
//                             <RadioForm
//                                 radio_props={schedule_props}
//                                 initial={props.gender}
//                                 buttonColor={'#28a745'}
//                                 onPress={(value) => {props.setValueSchedule(value)}}
//                                 selectedButtonColor={'#28a745'}
//                                 buttonSize={18}
//                                 labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
//                                 selectedLabelColor={'#28a745'}
//                             />
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         )
//     } else if (props.category.id == 168) {  //Resume
//         var gender_props = [
//             {label:'Не имееть значение', value: '' },
//             {label: 'Мужской', value: 'male' },
//             {label: 'Женский', value: 'female' }
//         ]
//         var schedule_props = radio_func(props.schedule)
//         var work_experience_props = radio_func(props.workExperience)
//         return (
//             <View>
//                 <View // Gender
//                     style={{
//                         backgroundColor: 'white', padding: 10
//                     }}
//                 >
//                     <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
//                         <Text style={{ fontSize: 18, color: '#969494' }}>
//                             Пол
//                         </Text>
//                     </View>
//                     <View>
//                         <RadioForm
//                             radio_props={gender_props}
//                             initial={props.gender}
//                             buttonColor={'#28a745'}
//                             onPress={(value) => {props.setValueGender(value)}}
//                             selectedButtonColor={'#28a745'}
//                             buttonSize={18}
//                             labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
//                             selectedLabelColor={'#28a745'}
//                         />
//                     </View>
//                 </View>


//                 <View  // ageFrom
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueAgeFrom(text)}
//                         placeholder='Возраст от'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.ageFrom}
//                     />
//                 </View>



//                 <View  // ageUp
//                     style={{
//                         marginBottom:10,
//                         marginTop:10
//                     }}
//                 >
//                     <Input
//                         keyboardType="numeric"
//                         onChangeText={(text) => props.setValueAgeUp(text)}
//                         placeholder='Возраст до'
//                         inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
//                         inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
//                         defaultValue={props.ageUp}
//                     />
//                 </View>



//                 <View style={{marginBottom:15}}>
//                     <View style={{ backgroundColor: 'white', padding: 10}}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
//                             <Text style={{ fontSize: 18, color: '#969494' }}>
//                                 Опыть работы
//                             </Text>
//                         </View>
//                         <View>
//                             <RadioForm
//                                 radio_props={work_experience_props}
//                                 initial={props.gender}
//                                 buttonColor={'#28a745'}
//                                 onPress={(value) => {props.setValueWorkExperience(value)}}
//                                 selectedButtonColor={'#28a745'}
//                                 buttonSize={18}
//                                 labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
//                                 selectedLabelColor={'#28a745'}
//                             />
//                         </View>
//                     </View>
//                 </View>


//                 <View style={{marginBottom:15}}>
//                     <View style={{ backgroundColor: 'white', padding: 10}}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
//                             <Text style={{ fontSize: 18, color: '#969494' }}>
//                                 График работы
//                             </Text>
//                         </View>
//                         <View>
//                             <RadioForm
//                                 radio_props={schedule_props}
//                                 initial={props.gender}
//                                 buttonColor={'#28a745'}
//                                 onPress={(value) => {props.setValueSchedule(value)}}
//                                 selectedButtonColor={'#28a745'}
//                                 buttonSize={18}
//                                 labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
//                                 selectedLabelColor={'#28a745'}
//                             />
//                         </View>
//                     </View>
//                 </View>


//             </View>
//         )
//     } else if (props.category.id == 148 || props.category.id == 149
//         || props.category.id == 150 || props.category.id == 151) {
//         return (
//             <></>
//         )
//     } else {
//         return (
//             <></>
//         )
//     }
// }




class AdFilterOptions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible:false,
            priceUp : '',
            priceFrom: '',
            ageFrom: '',
            ageUp: '',
            houseAreaFrom: '',
            houseAreaUp: '',
            landAreaFrom: '',
            landAreaUp: '',
            value_order: this.props.order,
            value_gender: this.props.gender,
            value_schedule: this.props.schedule,
            value_work_experience: this.props.workExperience,

            floorsInHouseFrom: '',
            floorsInHouseUp: '',
            floorFrom: '',
            floorUp: '',
            totalAreaFrom: '',
            totalAreaUp: '',
            value_number_rooms: this.props.numberRooms,
            value_rent_buy: this.props.rentBuy,

            value_gear_shift: this.props.gearShift,
            value_body_type: this.props.bodyType,
            value_drive_unit: this.props.driveUnit,
            value_engine_type: this.props.engineType,
            value_mark: this.props.mark,
            value_model: this.props.model,
            yearIssueFrom: this.props.yearIssueFrom,
            yearIssueUp: this.props.yearIssueUp,
            mileageFrom: this.props.mileageFrom,
            mileageUp: this.props.mileageUp,
            condition: this.props.condition
        }
    }


    static navigationOptions = () => {
        return {
            headerShown: false
        }
    }


    render () {
        let chooseCategory = (this.props.navigation.getParam('category') ? this.props.navigation.getParam('category') : this.props.currentCategory)
        let chooseRegion = (this.props.navigation.getParam('region') ? this.props.navigation.getParam('region') : this.props.currentRegion)
        var order_props = [
            {label:'По дате', value: 0 },
            {label: 'Дешевле', value: 'priceMinus' },
            {label: 'Дороже', value: 'pricePlus' }
        ]
        return (
            <View style={{flex:1, backgroundColor: '#f7f4f4'}}>
                <ScrollView>
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


                    <View style={{  //Category
                            marginTop:10,
                            marginBottom:10
                        }}
                    >
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

                    <View style={{  //Region
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



                    <View>
                        <AdditionalFilter
                            navigation={this.props.navigation}
                            category={chooseCategory}
                            gender={this.props.gender}
                            setValueGender={(value) => this.setState({value_gender:value})}
                            schedule={this.props.scheduleGeneral.data}
                            workExperience={this.props.workExperienceGeneral.data}
                            setValueAgeFrom={(text) => this.setState({ageFrom:text})}
                            setValueAgeUp={(text) => this.setState({ageUp:text})}
                            ageFrom={this.props.ageFrom}
                            ageUp={this.props.ageUp}
                            houseAreaFrom= {this.props.houseAreaFrom}
                            houseAreaUp = {this.props.houseAreaUp}
                            landAreaFrom = {this.props.landAreaFrom}
                            landAreaUp = {this.props.landAreaUp}
                            setValueHouseAreaFrom={(text) => this.setState({houseAreaFrom:text})}
                            setValueHouseAreaUp={(text) => this.setState({houseAreaUp:text})}
                            setValueLandAreaFrom={(text) => this.setState({landAreaFrom:text})}
                            setValueLandAreaUp={(text) => this.setState({landAreaUp:text})}
                            setValueSchedule={(value) => this.setState({value_schedule:value})}
                            setValueWorkExperience={(value) => this.setState({value_work_experience:value})}

                            setValueFloorsInHouseFrom = {(text) => this.setState({floorsInHouseFrom:text})}
                            setValueFloorsInHouseUp = {(text) => this.setState({floorsInHouseUp: text})}
                            setValueFloorFrom = {(text) => this.setState({floorFrom:text})}
                            setValueFloorUp = {(text) => this.setState({floorUp: text})}
                            setValueTotalAreaFrom = {(text) => this.setState({totalAreaFrom:text})}
                            setValueTotalAreaUp = {(text) => this.setState({totalAreaUp: text})}
                            numberRoomsGeneral = {this.props.numberRoomsGeneral.data}
                            setValueNumberRooms = {(value) => this.setState({value_number_rooms: value})}
                            floorsInHouseFrom = {this.props.floorsInHouseFrom}
                            floorsInHouseUp = {this.props.floorsInHouseUp}
                            floorFrom = {this.props.floorFrom}
                            floorUp = {this.props.floorUp}
                            totalAreaFrom = {this.props.totalAreaFrom}
                            totalAreaUp = {this.props.totalAreaUp}
                            numberRooms = {this.props.numberRooms}
                            rentBuy = {this.props.rentBuy}

                            gearShiftGeneral = {this.props.gearShiftGeneral.data}
                            bodyTypeGeneral = {this.props.bodyTypeGeneral.data}
                            driveUnitGeneral = {this.props.driveUnitGeneral.data}
                            engineTypeGeneral = {this.props.engineTypeGeneral.data}
                            markGeneral = {this.props.markGeneral.data}
                            value_body_type = {this.state.value_body_type}
                            yearIssueFrom = {this.state.yearIssueFrom}
                            yearIssueUp = {this.state.yearIssueUp}
                            mileageFrom = {this.state.mileageFrom}
                            mileageUp = {this.state.mileageUp}
                            condition = {this.state.condition}

                            setValueBodyType = {(value) => this.setState({value_body_type: value})}
                            setValueMark = {(value) => this.setState({value_mark: value})}
                            setValueModel = {(value) => this.setState({value_model: value})}
                            setValueYearIssueFrom = {(text) => this.setState({yearIssueFrom: text})}
                            setValueYearIssueUp = {(text) => this.setState({yearIssueUp: text})}
                            setValueMileageFrom = {(text) => this.setState({mileageFrom: text})}
                            setValueMileageUp = {(text) => this.setState({mileageUp: text})}
                            setValueConditional = {(value) => this.setState({condition: value})}

                        />
                    </View>



                    <View  //PriceFrom
                        style={{
                            marginBottom:10,
                            marginTop:10
                        }}
                    >
                        <Input
                            keyboardType="numeric"
                            onChangeText={(text) => this.setState({priceFrom:text})}
                            placeholder='Цена, от'
                            inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                            inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                            defaultValue={this.props.priceFrom}
                        />
                    </View>


                    <View   //PriceUp
                        style={{
                            marginBottom:10,
                        }}
                    >
                        <Input
                            keyboardType="numeric"
                            onChangeText={(text) => this.setState({priceUp:text})}
                            placeholder='Цена, до'
                            inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                            inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                            defaultValue={this.props.priceUp}
                        />
                    </View>



                    <View  //OrderAd
                        style={{ backgroundColor: 'white', padding: 10}}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                            <Text style={{ fontSize: 18, color: '#969494' }}>
                                Сортировать
                            </Text>
                        </View>
                        <View>
                            <RadioForm
                                radio_props={order_props}
                                initial={this.props.order}
                                buttonColor={'#28a745'}
                                onPress={(value) => {this.setState({value_order:value})}}
                                selectedButtonColor={'#28a745'}
                                buttonSize={18}
                                labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                                selectedLabelColor={'#28a745'}
                            />
                        </View>
                    </View>


                    <View style={{ height:60 }}>
                    </View>
                </ScrollView>
                <View style={styles.ToApplyFilter}>
                    <TouchableOpacity
                    onPress={() => {
                        if (chooseCategory.id == 168) {
                            this.props.setSchedule(this.state.value_schedule)
                            this.props.setWorkExperience(this.state.value_work_experience)
                            this.props.setAgeFrom(this.state.ageFrom)
                            this.props.setAgeUp(this.state.ageUp)
                            this.props.setGender(this.state.value_gender)
                        } else if (chooseCategory.id == 167) {
                            this.props.setSchedule(this.state.value_schedule)
                            this.props.setWorkExperience(this.state.value_work_experience)
                        } else if (chooseCategory.id == 170) {
                            this.props.setHouseAreaFrom(this.state.houseAreaFrom)
                            this.props.setHouseAreaUp(this.state.houseAreaUp)
                            this.props.setLandAreaFrom(this.state.landAreaFrom)
                            this.props.setLandAreaUp(this.state.landAreaUp)
                        } else if (chooseCategory.id == 169) {
                            this.props.setFloorsInHouseFrom(this.state.floorsInHouseFrom)
                            this.props.setFloorsInHouseUp(this.state.setFloorsInHouseUp)
                            this.props.setFloorFrom(this.state.floorFrom)
                            this.props.setFloorUp(this.state.floorUp)
                            this.props.setTotalAreaFrom(this.state.totalAreaFrom)
                            this.props.setTotalAreaUp(this.state.totalAreaUp)
                            this.props.setNumberRooms(this.state.value_number_rooms)
                        } else if (chooseCategory.id == 172) {
                            this.props.setBodyType(this.state.bodyType)
                        }
                        this.props.setCurrentCategory(chooseCategory)
                        this.props.setCurrentRegion(chooseRegion)
                        this.props.setOrder(this.state.value_order)
                        this.props.setPriceFrom(this.state.priceFrom)
                        this.props.setPriceUp(this.state.priceUp)
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
        currentRegion : state.extendedSearch.currentRegion,
        priceUp: state.extendedSearch.priceUp,
        priceFrom: state.extendedSearch.priceFrom,
        order: state.extendedSearch.order,
        gender: state.extendedSearch.gender,
        schedule: state.extendedSearch.schedule,
        scheduleGeneral: state.general.scheduleGeneral,
        workExperienceGeneral: state.general.workExperienceGeneral,
        workExperience: state.extendedSearch.workExperience,
        ageFrom: state.extendedSearch.ageFrom,
        ageUp: state.extendedSearch.ageUp,
        houseAreaFrom: state.extendedSearch.houseAreaFrom,
        houseAreaUp: state.extendedSearch.houseAreaUp,
        landAreaFrom: state.extendedSearch.landAreaFrom,
        landAreaUp: state.extendedSearch.landAreaUp,

        floorsInHouseFrom : state.extendedSearch.floorsInHouseFrom,
        floorsInHouseUp : state.extendedSearch.floorsInHouseUp,
        floorFrom : state.extendedSearch.floorFrom,
        floorUp : state.extendedSearch.floorUp,
        totalAreaFrom : state.extendedSearch.totalAreaFrom,
        totalAreaUp : state.extendedSearch.totalAreaUp,
        numberRooms : state.extendedSearch.numberRooms,
        numberRoomsGeneral : state.general.numberRoomsGeneral,
        rentBuy : state.extendedSearch.rentBuy,

        gearShiftGeneral: state.general.gearShiftGeneral,
        bodyTypeGeneral: state.general.bodyTypeGeneral,
        driveUnitGeneral: state.general.driveUnitGeneral,
        engineTypeGeneral: state.general.engineTypeGeneral,
        markGeneral: state.general.markGeneral,

        gearShift : state.extendedSearch.gearShift,
        bodyType: state.extendedSearch.bodyType,
        driveUnit: state.extendedSearch.driveUnit,
        engineType: state.extendedSearch.engineType,
        mark: state.extendedSearch.mark,
        yearIssueFrom: state.extendedSearch.yearIssueFrom,
        yearIssueUp: state.extendedSearch.yearIssueUp,
        mileageFrom: state.extendedSearch.mileageFrom,
        mileageUp: state.extendedSearch.mileageUp,
        condition: state.extendedSearch.condition,
    };
};

const mapDispatchToProps = {
    setCurrentCategory,
    setCurrentRegion,
    setPriceFrom,
    setPriceUp,
    setOrder,
    setGender,
    setAgeFrom,
    setAgeUp,
    setSchedule,
    setWorkExperience,
    setHouseAreaFrom,
    setHouseAreaUp,
    setLandAreaFrom,
    setLandAreaUp,

    setFloorsInHouseFrom,
    setFloorsInHouseUp,
    setFloorFrom,
    setFloorUp,
    setTotalAreaFrom,
    setTotalAreaUp,
    setNumberRooms,
    setRentBuy,

    setGearShift,
    setBodyType,
    setDriveUnit,
    setEngineType,
    setMark,
    setModel,
    setYearIssueFrom,
    setYearIssueUp,
    setMileageFrom,
    setMileageUp,
    setCondition,
};

export default  connect(mapStateToProps, mapDispatchToProps)(AdFilterOptions);