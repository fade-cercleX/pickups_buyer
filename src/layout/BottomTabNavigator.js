import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet  , Text } from "react-native";
import CustomTabBarButton from "../components/CustomTabBarButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/color";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
  AntDesign
} from "react-native-vector-icons";
import Home from "../screens/home/Home";
import History from "../screens/History";
import Profile from "../screens/profile/Profile";
import Contracts from "../screens/Contracts";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "#000",
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#6f2da8"
      })}
    >
      <Tab.Screen
        name={"home"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton route="Home" {...props} />
          )
        }}
      />

      <Tab.Screen
        name="rewards"
        component={Contracts}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='filetext1' color={color} size={24} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} route="Rewards" />
        }}
      />

      <Tab.Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={25} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} route="History" />
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={34} />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} route="Profile" />
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: colors.backgroundPrimary,
    borderTopWidth: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
  },
});
