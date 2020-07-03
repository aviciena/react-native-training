import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import profileLogo from '../../assets/profile/profile-logo.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    content: {
        marginTop: 50,
        marginBottom: 20
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    fontText: {
        fontFamily: 'Verdana',
    }
});


class TraineeDetails extends Component {
    constructor(props) {
        super(props);

        this.params = this.props.route.params;
        this.details = this.params.details;

        //Change header title based on trainee name
        this.props.navigation.setOptions({ title: this.params.name });
    }

    /**
     * This function is used for return phone view
     */
    getPhoneView() {
        return this.getTextView('Phone', this.details.phone);
    }

    /**
     * This function is used for display contact information view
     */
    getContactInformationView() {
        return (
            <>
                <Text style={[styles.fontText, { marginBottom: 10 }]}>CONTACT INFORMATION</Text>
                {this.getTextView('Name', this.params.name)}
                {this.getTextView('Email', this.params.email)}
                {this.details.phone !== '' ? this.getPhoneView() : null}
                {this.getTextView('Location', this.details.location)}
            </>
        );
    }

    /**
     * This function is used for display basic information view
     */
    getBasicInformationView() {
        return (
            <>
                <Text style={[styles.fontText, { marginTop: 50, marginBottom: 10 }]}>BASIC INFORMATION</Text>
                {this.getTextView('Languages', this.details.language)}
            </>
        );
    }

    /**
     * This function is used for display human resources view
     */
    getHRInformationView() {
        return (
            <>
                <Text style={[styles.fontText, { marginTop: 50, marginBottom: 10 }]}>HUMAN RESOURCES</Text>
                {this.getTextView('Position', this.details.position)}
                {this.getTextView('Department', this.details.department)}
                {this.getTextView('Division', this.details.division)}
                {this.getTextView('Manager', this.details.manager)}
                {this.getTextView('Employee ID', this.params.id)}
                {this.getTextView('Start Date', this.details.startDate)}
            </>
        );
    }

    /**
     * This function is used for display row text view
     * @param {*} title String
     * @param {*} value String
     */
    getTextView(title, value) {
        return (
            <>
                <View style={{ height: 1, backgroundColor: 'grey' }} />
                <View style={{ flexDirection: 'row', marginTop: 12, marginBottom: 12 }}>
                    <Text style={[styles.fontText, { flex: 1.3 }]}>{title}</Text>
                    <Text style={[styles.fontText, { flex: 3 }]}>{value}</Text>
                </View>
            </>
        );
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image source={profileLogo} style={styles.image}></Image>
                <View style={styles.content}>
                    {this.getContactInformationView()}
                    {this.details.language !== '' ? this.getBasicInformationView() : null}
                    {this.getHRInformationView()}
                </View>
            </ScrollView>
        );
    }

}

export default TraineeDetails;
