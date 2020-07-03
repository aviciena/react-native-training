import React, { Component } from 'react';
import { connect } from "react-redux";

import ProductList from '../component/productList';
import MOCK_DATA from '../mocks/MockData';

import { getTraineesResponse } from './actions';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    spinnerContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


class SampleReducer extends Component {
    componentDidMount() {
        //Add timer for 2 seconds for display spinner (act like a request to service)
        setTimeout(() => {
            this.props.getTraineesResponse(MOCK_DATA);
        }, 2000);
    }

    productListHandler = data => {
        this.props.navigation.navigate('Details', data)
    };

    /**
     * Get Trainees List view
     */
    getProductListView() {
        return (<ProductList data={this.props.traineesList.trainees.data} title={'React Native Trainees'} onClick={this.productListHandler} />);
    }

    /**
     * Get spinner view
     */
    getSpinnerView() {
        return (
            <ActivityIndicator style={styles.spinnerContainer} size="large" />
        );
    }

    render() {
        const viewContainer = this.props.traineesList && this.props.traineesList.trainees ? this.getProductListView() : this.getSpinnerView();
        return (
            <View style={styles.container}>
                {viewContainer}
            </View>
        );
    }

}

/** Map traineesList state to redux components */
const mapStateToProps = state => {
    return {
        traineesList: state.traineesList
    };
}


/** Map to redux components. */
const mapDispatchToProps = {
    getTraineesResponse: getTraineesResponse
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleReducer);
