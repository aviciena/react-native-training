import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';

import ItemList from './ItemList';

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    h2text: {
        marginTop: 10,
        fontFamily: 'Helvetica',
        fontSize: 28,
        fontWeight: 'bold',
    }
});

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.title ? <Text style={styles.h2text}>{this.props.title}</Text> : null}
                <FlatList
                    data={this.props.data}
                    renderItem={({ item }) => <ItemList data={item} onClick={this.props.onClick} />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }

}

export default ProductList;
