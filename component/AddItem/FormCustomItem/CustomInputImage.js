import React from 'react'
import { View, ScrollView, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



class ImgItem  extends React.Component{


    constructor(props) {
        super(props)

        this.state ={
            uri: '',

        }

        this.getPermissionAsync = this.getPermissionAsync.bind(this)
        this._pickImage = this._pickImage.bind(this)
    }

    componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if (status !== 'granted') {
                alert('Извините, нам нужны разрешения на поворот камеры, чтобы это работало!')
            }
        }
    }


    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            quality:1,
        })

        this.props.setImgUri(result.uri, this.props.uriIndex)
        this.setState({uri: result.uri})

    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={ () => {
                        this._pickImage()
                    }}
                >
                    <ImageBackground
                        style={{ width:82, height:82 }}
                        source={require('../../../static/images/img.png')}
                    >
                        {
                            this.state.uri ?
                                <Image
                                    source={{ uri: this.state.uri }}
                                    style={{ width:82, height:82 }}
                                /> : null
                        }
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}


class CustomInputImage extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            imgUris : []
        }
    }


    render() {
        let imgArrayUri = []
        let imgArray = []
        for (let i=0; i<11; i++) {
            imgArray.push(
                <View
                    key={i}
                    style={{
                        margin: 4
                    }}
                >
                    <ImgItem
                        uri={imgArrayUri[i]}
                        uriIndex={i}
                        setImgUri={(uri,i) => {
                            this.setState(state => {
                                const imgUris = state.imgUris
                                imgUris[i] = uri
                                return {
                                    ...state,
                                    imgUris
                                }
                            })
                            this.props.setImageList(this.state.imgUris)
                        }}
                    />
                </View>
            )
        }
        return (
            <View style={{ margin:5 }}>
                <ScrollView
                    horizontal={true}
                >
                    { imgArray }
                </ScrollView>
            </View>
        )
    }
}

export default CustomInputImage;
