import React from "react";
import HomeScreen from "../screens/homeScreen";
import SettingScreen from "../screens/settingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "rgb(53, 143, 228)",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Setting"
        component={SettingScreen} 
        initialParams={{ setIsLoggedIn:setIsLoggedIn }}
      />
    </Stack.Navigator>
  );
}
