import React from 'react'
import { View, Text, Button } from "react-native";

// Setting Screen Styles
import styles from '../styles/settingScreen.style';

export default function SettingScreen({ route, navigation }) {
    return (
      <View style={styles.container}>
        <Text>Setting Screen</Text>
        {/* Set isLoggedIn state to false when clicked. When isLoggedIn state is false, the welcome page shows automatically designates that the user is not signed in. */}
        <Button title="BACK" onPress={() => navigation.goBack()} />
        <Button title="LOGOUT" onPress={() => route.params.setIsLoggedIn(false)} />
      </View>
    );
  }