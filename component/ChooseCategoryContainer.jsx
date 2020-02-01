import React from 'react'
import ChooseCategoryScreen from '../screens/ChooseCategoryScreen'
import { connect } from 'react-redux'
import { getCategory, setCounterCategoryLevel } from '../store/ChooseCategory/actions'


class ChooseCategoryContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <ChooseCategoryScreen
                navigation={this.props.navigation}
                categoryLevelFirst={this.props.categoryLevelFirst.data}
                categoryLevelSecond={this.props.categoryLevelSecond.data}
                categoryLevelTird={this.props.categoryLevelTird.data}
                categoryLevelFourth={this.props.categoryLevelFourth.data}
                isLoaded={this.props.isLoaded}
                isLoading={this.props.isLoading}
                getCategory={this.props.getCategory}
                navigation= {this.props.navigation}
                setCounterCategoryLevel={this.props.setCounterCategoryLevel}
                screenWichCallChooseCategory={this.props.screenWichCallChooseCategory}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryLevelFirst: state.category.categoryLevelFirst,
        categoryLevelSecond: state.category.categoryLevelSecond,
        categoryLevelTird: state.category.categoryLevelTird,
        categoryLevelFourth: state.category.categoryLevelFourth,
        isLoading: state.category.isLoading,
        isLoaded: state.category.isLoaded,
        screenWichCallChooseCategory: state.extendedSearch.screenWichCallChooseCategory
    };
};

const mapDispatchToProps = {
    getCategory,
    setCounterCategoryLevel
};

export default  connect(mapStateToProps, mapDispatchToProps)(ChooseCategoryContainer);