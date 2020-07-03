import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import profileLogo from '../../assets/profile/profile-logo.png';

const styles = StyleSheet.create({
    flatview: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#F5FCFF',
        marginTop: 8,
        flex: 1,
        flexDirection: 'row',
    },
    name: {
        fontFamily: 'Verdana',
        fontSize: 18
    },
    email: {
        color: 'red'
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    leftContainer: {
        flexGrow: 1,
        marginLeft: 8
    }
});

class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.flatview} onPress={() => this.props.onClick(this.props.data)}>
                <Image source={profileLogo} style={styles.image}></Image>
                <View style={styles.leftContainer}>
                    <Text style={styles.name}>{this.props.data.name}</Text>
                    <Text style={styles.email}>{this.props.data.email}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

export default ItemList;
