import React from 'react'
import { View, Text } from 'native-base'
import { connect } from 'react-redux'

class ProfileInfo extends React.Component {

    constructor (props) {
        super(props)
    }


    render () {


        return (
            <View>
                <Text>
                    THIS IS PROFILE INFO
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = {
};

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);