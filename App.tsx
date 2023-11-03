import * as React from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Detail from './screens/Detail';
import Home from './screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Detail: {placeId: number}
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} />
            
            <Stack.Screen name='Detail' component={Detail}  />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;