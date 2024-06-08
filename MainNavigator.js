import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailMovieScreen from './src/screen/DetailMovieScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Screen}/>
                <Stack.Screenname name="Detail" component={DetailMovieScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator
