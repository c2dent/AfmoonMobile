import React from 'react'
import CategoryScreen from '../screens/CategoryScreen'
import { connect } from 'react-redux'


class CategoryContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <CategoryScreen
                navigation={this.props.navigation}
                categories={this.props.categories.data}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.ads.categories
    };
};

const mapDispatchToProps = {
};

export default  connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);