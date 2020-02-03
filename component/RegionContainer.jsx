import React from 'react'
import RegionScreen from '../screens/RegionScreen'
import { connect } from 'react-redux'


class RegionContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <RegionScreen
                navigation={this.props.navigation}
                regions={this.props.regions.data}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        regions: state.ads.regions
    };
};

const mapDispatchToProps = {
};

export default  connect(mapStateToProps, mapDispatchToProps)(RegionContainer);