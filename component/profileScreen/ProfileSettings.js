import React from 'react'
import { View, Text } from 'native-base'
import { connect } from 'react-redux'

class ProfileSettings extends React.Component {

    constructor (props) {
        super(props)
    }


    render () {


        return (
            <View>
                <Text>
                    THIS IS PROFILE SETTINGS
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

export default  connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);