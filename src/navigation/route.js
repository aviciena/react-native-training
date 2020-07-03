import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TraineesList from '../screen/home-screen';
import TraineeDetails from '../screen/detail-screen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={TraineesList}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Details"
                component={TraineeDetails}
                options={{ headerBackTitle: 'Back' }} />
        </Stack.Navigator>
    )
}

class MainRoute extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer>
                    <HomeStack />
                </NavigationContainer>
            </SafeAreaView>
        );
    }
}

export default MainRoute;