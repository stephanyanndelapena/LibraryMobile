import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import addbook from './screens/addbook';
import homescreen from './screens/homescreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Form" component={addbook} options={{ title: 'Book Form' }} />
        <Stack.Screen name="Confirmation" component={homescreen} options={{ title: 'Submission Confirmation' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}