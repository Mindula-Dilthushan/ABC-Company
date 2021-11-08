import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/screens/SignIn';
import DashBoard from './src/screens/DashBoard';

const Stack = createStackNavigator();

class App extends Component{
  render() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn} />
                <Stack.Screen name="DashBoard" options={{headerShown:false}} component={DashBoard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

export default App;

