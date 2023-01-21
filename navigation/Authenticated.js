import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "../src/layout/BottomTabNavigator";
import { Text } from "../src/layout/Text";
import History from "../src/screens/History";
import Home from "../src/screens/home/Home";
import EditProfile from "../src/screens/EditProfile";
import Contracts from "../src/screens/Contracts";
import SingleContract from "../src/screens/SingleContract";
import AcceptPickup from "../src/screens/home/AcceptPickup";
import AddNewDriver from "../src/screens/profile/AddNewDriver";
import PickupDetails from "../src/screens/home/PickupDetails";

const Authenticated = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={PickupDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Authenticated;
