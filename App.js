import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./route/stackNavigator";
import WelcomeScreen from "./screens/welcomeScreen";
import { LogBox } from "react-native";

// Ignore unnecessary warnings
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <StackNavigator setIsLoggedIn={setIsLoggedIn} />
      </NavigationContainer>
    );
  }
  return <WelcomeScreen setIsLoggedIn={setIsLoggedIn} />;
}

// TODO
// ====
// 1. ACCORDION / ALTERNATIVE
// 2. YOUTUBE IFRAMES/ FIND RESPECTIVE COUSRES BEFORE SLEEPING
// 3. WRITE AND READ TO LOCAL JSON FILE
// 4. SPLASH SCREEN CONFIG
// 5. LIL ANIMATIONS
// 6. JAVA PROJECT

export default App;
