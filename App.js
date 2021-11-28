import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./route/stackNavigator";
import WelcomeScreen from "./screens/welcomeScreen";
import { LogBox } from 'react-native';

// Ignore unnecessary warnings
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <StackNavigator setIsLoggedIn={setIsLoggedIn} />
      </NavigationContainer>
    );
  }
  return <WelcomeScreen setIsLoggedIn={setIsLoggedIn} />
}

export default App;
