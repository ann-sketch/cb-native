import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from "react-native";
import "../styles/images/bg.png";

// Welcome Screen Styles
import styles from "../styles/welcomeScreen.style";

export default function WelcomeScreen({ setIsLoggedIn }) {
  const animated = new Animated.Value(500);
  const duration = 2000;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.welcomecontainer}>
      <ImageBackground
        source={require("../styles/images/bg.png")}
        style={styles.image}
      />

      <Animated.View style={{ transform: [{ translateY: animated }] }}>
        <View style={styles.welcome}>
          <View>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.message}>
            Find the appropriate job for your skills{"\n"}
            Leverage your skills and knowledge in the job market{"\n"}
            Join us for the experience of a career lifetime
          </Text>
          </View>
          <TouchableOpacity style={styles.signin}>
            <Text style={styles.signintext} onPress={() => setIsLoggedIn(true)}>
              Sign In With Google
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}
