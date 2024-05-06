// Dans votre fichier de navigation
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import HomepageScreen from './screens/HomepageScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomepageScreen" component={HomepageScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
