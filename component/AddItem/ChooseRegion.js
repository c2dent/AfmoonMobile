import React from 'react'
import { View, Text } from 'react-native'
import { Content } from 'native-base';
import RenderCategoryList from './RenderCategoryList'
import { connect } from 'react-redux'


class ChooseRegion extends React.Component{

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Content>
                <View>
                    {
                        this.props.regions.data.map((region, index) => (
                            region.lft + 1 == region.rght ?
                                <RenderCategoryList
                                    category={region}
                                    index={index}
                                    key={index}
                                /> : null
                        ))
                    }
                </View>
            </Content>
        )
    }
}

const mapStateToProps = state => {
    return {
        regions: state.ads.regions,
    };
};

const mapDispatchToProps = {
};

export default  connect(mapStateToProps, mapDispatchToProps)(ChooseRegion);