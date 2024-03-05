import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Registration from "./Registration";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Stackroutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Login}  />
        <Stack.Screen name="Resgistration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stackroutes;
