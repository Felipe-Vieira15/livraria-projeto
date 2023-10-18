import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';

const Stack = createStackNavigator();

export default function RootNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: true}} />
                <Stack.Screen name='Login' component={Login} options={{headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}