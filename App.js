// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccueilScreen from './screens/AccueilScreen';
import ConnexionScreen from './screens/ConnexionScreen';
import ReservationScreen from './screens/ReservationScreen';
import SQLite from 'react-native-sqlite-storage';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  //const db = SQLite.openDatabase({ name: 'myDatabase.db', location: 'default' });

  //const db = SQLite.openDatabase('example.db');
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen name='Accueil' component={AccueilScreen} options={{ title: 'Accueil' }} />
          <Stack.Screen name="Reservation" component={ReservationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
