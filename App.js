import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import DashBoard from './src/screens/DashBoard';
import Beds from './src/screens/Beds';

const Stack = createStackNavigator();

class App extends Component{
  render() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn} />
                <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUp} />
                <Stack.Screen name="DashBoard" options={{headerShown:false}} component={DashBoard} />
                <Stack.Screen name="Beds" options={{headerShown:false}} component={Beds} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

export default App;

