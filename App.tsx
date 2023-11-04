import * as React from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import Booking from './screens/Booking';
import Detail from './screens/Detail';
import Home from './screens/Home';
import ViewBooking from './screens/ViewBooking';

export type RootStackParamList = {
  Home: undefined;
  Detail: {placeId: number};
  Booking: undefined;
  ViewBooking : undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={Home} />            
            <Stack.Screen name='Detail' component={Detail}  />
            <Stack.Screen name='Booking' component={Booking} />
            <Stack.Screen name='ViewBooking' component={ViewBooking} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;