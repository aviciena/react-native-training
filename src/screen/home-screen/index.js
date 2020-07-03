import React, { Component } from 'react';
import { connect } from "react-redux";

import ProductList from '../../component/productList';

import { getTraineesList } from './actions';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';

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


class Nextworking extends Component {
    componentDidMount() {
        this.props.getTraineesList();
    }

    productListHandler = data => {
        this.props.navigation.navigate('Details', data)
    };

    /**
     * Get Trainees List view
     */
    getProductListView() {
        if (this.props.traineesList.trainees.error) {
            Alert.alert(this.props.traineesList.trainees.message);
            return null;
        } else {
            return (<ProductList data={this.props.traineesList.trainees.data} title={'React Native Trainees'} onClick={this.productListHandler} />);
        }
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
    getTraineesList: getTraineesList
};

export default connect(mapStateToProps, mapDispatchToProps)(Nextworking);
