import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from './src/screens/SignIn';

const Stack = createStackNavigator();

class App extends Component{
  render() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }
}

export default App;

