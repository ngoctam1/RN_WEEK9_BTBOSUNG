import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BikeListScreen from './screens/screen1'; // Thay thế bằng đường dẫn đúng
import Screen2 from './screens/screen2'; // Thay thế bằng đường dẫn đúng
import Screen3 from './screens/screen3'; // Thay thế bằng đường dẫn đúng

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator initialRouteName="PowerBikeShop">
    <Stack.Screen 
      name="PowerBikeShop" 
      component={BikeListScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Screen2" 
      component={Screen2} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Screen3" 
      component={Screen3} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
</NavigationContainer>
  );
}
