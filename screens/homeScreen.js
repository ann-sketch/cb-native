import React from "react";
import { View, Text, Button } from "react-native";

// Home Screen Styles
import styles from "../styles/homeScreen.style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to SETTINGS"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
}
