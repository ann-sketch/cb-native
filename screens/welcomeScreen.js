import React from "react";
import { View, Text, Button } from "react-native";

// Welcome Screen Styles
import styles from "../styles/welcomeScreen.style";

export default function WelcomeScreen({ setIsLoggedIn }) {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button title="SIGN IN TO HOMEPAGE" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
}
