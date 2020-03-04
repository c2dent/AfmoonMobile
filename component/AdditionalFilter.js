import React, { useState } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Button, Input, CheckBox } from 'react-native-elements'
import RadioForm from 'react-native-simple-radio-button';



const radio_func = (array) => {
    set_array = []
    array.map((item) => {
        set_array.push({'label':item[1], 'value':item[0]})
    })
    return set_array
}


export default AdditionalFilter = (props) => {

    const [body_type, setBodyType] = useState('')
    const [mark, setMark] = useState('')
    const [isMark, setIsMark] = useState(false)
    const [modelData, setModelData] = useState('')
    const [model, setModel] = useState('')

    if (props.category.id == 172) {  //Avtomobil



        const _setBodyType = (data) => {
            props.setValueBodyType(data[0])
            setBodyType(data[1])
        }


        const _setMark = (data) => {
            props.setValueMark(data[0])
            setIsMark(true)
            setModelData(data[1])
            setMark(data[0])
        }


        const _setModel = (data) => {
            props.setValueModel(data[0])
            setModel(data[1])
        }



        return (
            <View>
                <View style={{marginBottom:20}}>
                    <TouchableOpacity   // MARK
                        style={{
                            paddingBottom:18,
                            paddingTop:18,
                            paddingLeft:10,
                            paddingRight:10,
                            backgroundColor: 'white',
                            marginBottom:2
                        }}
                        onPress={() => {
                            props.navigation.navigate('chooseAsList', {
                                renderIndex: 0,
                                data:props.markGeneral,
                                setBodyType: (data) => _setMark(data)
                            })
                        }}
                    >
                        <View>
                            { mark ? <Text style={{fontSize:20}}>{mark}</Text> : <Text style={{fontSize:20, color:'#969494'}}>Марка</Text> }
                        </View>
                    </TouchableOpacity>


                    {
                        isMark?
                        <TouchableOpacity   // MODEL
                            style={{
                                paddingBottom:18,
                                paddingTop:18,
                                paddingLeft:10,
                                paddingRight:10,
                                backgroundColor: 'white',
                                marginBottom:2
                            }}
                            onPress={() => {
                                props.navigation.navigate('chooseAsList', {
                                    renderIndex: 1,
                                    data: modelData,
                                    setBodyType: (data) => _setModel(data)
                                })
                            }}
                        >
                            <View>
                                { model ? <Text style={{fontSize:20}}>{model}</Text> : <Text style={{fontSize:20, color:'#969494'}}>Модел</Text> }
                            </View>
                        </TouchableOpacity>: <></>

                    }
                </View>


                <View style={{marginBottom:20}}>
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueYearIssueFrom(text)}
                        placeholder='Год выпуска, от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.yearIssueFrom}
                    />


                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueYearIssueUp(text)}
                        placeholder='Год выпуска, до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.yearIssueUp}
                    />
                </View>


                <View style={{marginBottom:20}}>
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueMileageFrom(text)}
                        placeholder='Пробег, от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.mileageFrom}
                    />


                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueMileageUp(text)}
                        placeholder='Пробег, до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.mileageUp}
                    />
                </View>



                <View>
                    <TouchableOpacity   // BODY TYPE
                        style={{
                            paddingBottom:18,
                            paddingTop:18,
                            paddingLeft:10,
                            paddingRight:10,
                            backgroundColor: 'white',
                            marginBottom:2
                        }}
                        onPress={() => {
                            props.navigation.navigate('chooseAsList', {
                                renderIndex:1,
                                data:props.bodyTypeGeneral,
                                setBodyType: (data) => _setBodyType(data)
                            })
                        }}
                    >
                        <View>
                            { body_type ? <Text style={{fontSize:20}}>{body_type}</Text> : <Text style={{fontSize:20, color:'#969494'}}>Тип кузова</Text> }
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    } else if (props.category.id == 169) {  //Apartment
        var number_rooms_props = radio_func(props.numberRoomsGeneral)
        return (
            <View>
                <View  // floors in House
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueFloorsInHouseFrom(text)}
                        placeholder='Этажы в доме от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.floorsInHouseFrom}
                    />
                </View>


                <View  // floors in House
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueFloorsInHouseUp(text)}
                        placeholder='Этажы в доме до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.floorsInHouseUp}
                    />
                </View>


                <View  // floorFrom
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueFloorFrom(text)}
                        placeholder='Этаж от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.floorFrom}
                    />
                </View>


                <View  // floorUp
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueFloorUp(text)}
                        placeholder='Этаж до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.floorUp}
                    />
                </View>


                <View  // TotalAreaFrom
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueTotalAreaFrom(text)}
                        placeholder='Общая площадь от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.totalAreaFrom}
                    />
                </View>


                <View  // TotalAreaUp
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueTotalAreaUp(text)}
                        placeholder='Общая площадь до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.totalAreaUp}
                    />
                </View>


                <View style={{marginBottom:15}}>
                    <View style={{ backgroundColor: 'white', padding: 10}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                            <Text style={{ fontSize: 18, color: '#969494' }}>
                                Количество комнат
                            </Text>
                        </View>
                        <View>
                            <RadioForm
                                radio_props={number_rooms_props}
                                initial={props.numberRooms}
                                buttonColor={'#28a745'}
                                onPress={(value) => {props.setValueNumberRooms(value)}}
                                selectedButtonColor={'#28a745'}
                                buttonSize={18}
                                labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                                selectedLabelColor={'#28a745'}
                            />
                        </View>
                    </View>
                </View>


            </View>
        )
    } else if (props.category.id == 170) {  //Houe
        return (
            <View>

                <View  // HouseAreaFrom
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueHouseAreaFrom(text)}
                        placeholder='Площадь дома от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.houseAreaFrom}
                    />
                </View>


                <View  // HouseAreaUp
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueHouseAreaUp(text)}
                        placeholder='Площадь дома до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.houseAreaUp}
                    />
                </View>


                <View  // LandAreaFrom
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueLandAreaFrom(text)}
                        placeholder='Площадь участка от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.landAreaFrom}
                    />
                </View>


                <View  // LandAreaUp
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueLandAreaUp(text)}
                        placeholder='Площадь участка до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.landAreaUp}
                    />
                </View>

            </View>
        )
    } else if (props.category.id == 167) {  //  VACANCY
        var schedule_props = radio_func(props.schedule)
        var work_experience_props = radio_func(props.workExperience)
        return (
            <View>
                <View style={{marginBottom:15}}>
                    <View style={{ backgroundColor: 'white', padding: 10}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                            <Text style={{ fontSize: 18, color: '#969494' }}>
                                Опыть работы
                            </Text>
                        </View>
                        <View>
                            <RadioForm
                                radio_props={work_experience_props}
                                initial={props.gender}
                                buttonColor={'#28a745'}
                                onPress={(value) => {props.setValueWorkExperience(value)}}
                                selectedButtonColor={'#28a745'}
                                buttonSize={18}
                                labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                                selectedLabelColor={'#28a745'}
                            />
                        </View>
                    </View>
                </View>


                <View style={{marginBottom:15}}>
                    <View style={{ backgroundColor: 'white', padding: 10}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                            <Text style={{ fontSize: 18, color: '#969494' }}>
                                График работы
                            </Text>
                        </View>
                        <View>
                            <RadioForm
                                radio_props={schedule_props}
                                initial={props.gender}
                                buttonColor={'#28a745'}
                                onPress={(value) => {props.setValueSchedule(value)}}
                                selectedButtonColor={'#28a745'}
                                buttonSize={18}
                                labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                                selectedLabelColor={'#28a745'}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    } else if (props.category.id == 168) {  //Resume
        var gender_props = [
            {label:'Не имееть значение', value: '' },
            {label: 'Мужской', value: 'male' },
            {label: 'Женский', value: 'female' }
        ]
        var schedule_props = radio_func(props.schedule)
        var work_experience_props = radio_func(props.workExperience)
        return (
            <View>
                <View // Gender
                    style={{
                        backgroundColor: 'white', padding: 10
                    }}
                >
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                        <Text style={{ fontSize: 18, color: '#969494' }}>
                            Пол
                        </Text>
                    </View>
                    <View>
                        <RadioForm
                            radio_props={gender_props}
                            initial={props.gender}
                            buttonColor={'#28a745'}
                            onPress={(value) => {props.setValueGender(value)}}
                            selectedButtonColor={'#28a745'}
                            buttonSize={18}
                            labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                            selectedLabelColor={'#28a745'}
                        />
                    </View>
                </View>


                <View  // ageFrom
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueAgeFrom(text)}
                        placeholder='Возраст от'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.ageFrom}
                    />
                </View>



                <View  // ageUp
                    style={{
                        marginBottom:10,
                        marginTop:10
                    }}
                >
                    <Input
                        keyboardType="numeric"
                        onChangeText={(text) => props.setValueAgeUp(text)}
                        placeholder='Возраст до'
                        inputStyle={{ backgroundColor:'white', width: '100%', fontSize: 20 }}
                        inputContainerStyle={{ padding: 5, backgroundColor: 'white', margin: 0}}
                        defaultValue={props.ageUp}
                    />
                </View>



                <View style={{marginBottom:15}}>
                    <View style={{ backgroundColor: 'white', padding: 10}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                            <Text style={{ fontSize: 18, color: '#969494' }}>
                                Опыть работы
                            </Text>
                        </View>
                        <View>
                            <RadioForm
                                radio_props={work_experience_props}
                                initial={props.gender}
                                buttonColor={'#28a745'}
                                onPress={(value) => {props.setValueWorkExperience(value)}}
                                selectedButtonColor={'#28a745'}
                                buttonSize={18}
                                labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                                selectedLabelColor={'#28a745'}
                            />
                        </View>
                    </View>
                </View>


                <View style={{marginBottom:15}}>
                    <View style={{ backgroundColor: 'white', padding: 10}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
                            <Text style={{ fontSize: 18, color: '#969494' }}>
                                График работы
                            </Text>
                        </View>
                        <View>
                            <RadioForm
                                radio_props={schedule_props}
                                initial={props.gender}
                                buttonColor={'#28a745'}
                                onPress={(value) => {props.setValueSchedule(value)}}
                                selectedButtonColor={'#28a745'}
                                buttonSize={18}
                                labelStyle={{ fontSize:20, marginBottom: 10, marginTop:5 }}
                                selectedLabelColor={'#28a745'}
                            />
                        </View>
                    </View>
                </View>


            </View>
        )
    } else if (props.category.id == 148 || props.category.id == 149
        || props.category.id == 150 || props.category.id == 151) {
        return (
            <></>
        )
    } else {
        return (
            <></>
        )
    }
}