import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import BottomTabs from '../screens/tabs';
import GameScreen from '../screens/game/GameScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
                <Stack.Screen name='home' component={BottomTabs} />
                <Stack.Screen name="gameDetail" component={GameScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes