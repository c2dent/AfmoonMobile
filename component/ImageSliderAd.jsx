import * as React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Image, Text, Modal } from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'


const DEVAICE_WIDTH = Dimensions.get('window').width;

class ImageSliderAd extends React.Component {
    scrollRef = React.createRef();

    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: 0,
            modalVisible: false,
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setSelectedIndex = event => {
        // width of the wiewSize
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position of the scrollView
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset / viewSize)
        this.setState({ selectedIndex })
    }

    render() {
        const { images } = this.props;
        const {selectedIndex} = this.state
        if (!images) return <Text>Загружаеться фотографии</Text>
        return (
            <View style={{width: "100%", height:"100%"}}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={ this.scrollRef }
                >
                    {
                        images.map(image => (
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(true);
                                }}
                            >
                                <Image
                                    resizeMode="contain"
                                    key={image.image}
                                    source={{ uri:'http://192.168.1.6:8000' + image.image }}
                                    style={styles.imageSlider}
                                />
                            </TouchableHighlight>
                        ))
                    }
                </ScrollView>
                <View style={styles.circleDiv}>
                    {
                        images.map((image, i) =>(
                            <View
                            key={image.image}
                            style={[
                                styles.whiteCircle,
                                { opacity: i === selectedIndex ? 0.5 : 1}
                            ]} />
                        ))
                    }
                </View>


                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    propagateSwipe={true}
                >
                    <View style={{
                        flex:1,
                        backgroundColor: 'black'
                    }}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            onMomentumScrollEnd={this.setSelectedIndex}
                            ref={ this.scrollRef }
                            >
                            {
                                images.map(image => (
                                    <Image
                                        resizeMode="contain"
                                        key={image.image + '1'}
                                        source={{ uri:'http://192.168.1.6:8000' + image.image }}
                                        style={styles.imageSlider}
                                    />
                                ))
                            }
                        </ScrollView>
                        <View style={styles.circleDiv}>
                            {
                                images.map((image, i) =>(
                                    <View
                                    key={image.image + '1'}
                                    style={[
                                        styles.whiteCircle,
                                        { opacity: i === selectedIndex ? 0.5 : 1}
                                    ]} />
                                ))
                            }
                        </View>
                        <View style={styles.closeModal}>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible)
                                }}
                            >
                                <Ionicons name={'ios-close'} size={60} color={'white'} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageSlider: {
        height: '100%',
        width: DEVAICE_WIDTH,
    },
    circleDiv: {
        position: 'absolute',
        bottom: 15,
        height: 10,
        width:"100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius:3,
        margin:5,
        backgroundColor: '#fff'
    },
    closeModal: {
        position:'absolute',
        top:20,
        right:20,
    }
})

export { ImageSliderAd };