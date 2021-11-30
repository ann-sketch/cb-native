import React from "react";
import HomeScreen from "../screens/homeScreen";
import SettingScreen from "../screens/settingScreen";
import ChatScreen from "../screens/chatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ setIsLoggedIn }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "rgb(53, 143, 228)",
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        initialParams={{ setIsLoggedIn: setIsLoggedIn }}
      />
      <Stack.Screen name="Chatbot" component={ChatScreen} />
    </Stack.Navigator>
  );
}
