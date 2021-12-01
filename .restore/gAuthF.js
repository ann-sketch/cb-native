import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";

export default function AuthScreen() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const initAsync = async () => {
    await GoogleSignIn.initAsync();
    _syncUserWithStateAsync();
  };

  const _syncUserWithStateAsync = async () => {
    const user = await GoogleSignIn.signInSilentlyAsync();
    setUser(user);
  };

  const signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setUser(null);
  };

  const signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      setDisplayName(user.displayName);

      if (type === "success") {
        _syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert("login: Error:" + message);
    }
  };

  const onPress = () => {
    if (user) {
      signOutAsync();
    } else {
      signInAsync();
    }
  };

  useEffect(() => initAsync());

  return (
    <View style={styles.container}>
      <Text onPress={onPress}>{user ? "Sign Out" : "Sign In"}</Text>
      <Text>{displayName ? <Text>{displayName}</Text> : "DN not found"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
