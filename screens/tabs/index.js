import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import PreferenceScreen from '../preferencies';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export class BottomTabs extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={{
                    tabBarActiveTintColor: 'blue',
                    headerShown: false,
                }}>
                <Tab.Screen
                    name="home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='home' color={color} size={size} />
                        )
                    }} />
                <Tab.Screen
                    name="settings"
                    component={PreferenceScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='account' color={color} size={size} />
                        )
                    }} />
            </Tab.Navigator>
        )
    }
}

export default BottomTabs