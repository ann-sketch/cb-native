import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Dimensions,
  Image,
  Button,
  Pressable,
} from "react-native";

// Home Screen Styles
import styles from "../styles/homeScreen.style";

// image imports
import navLogo from "../assets/img/job-coach-logo.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import flutter from "../assets/img/Flutter-logo.png";
import javascript from "../assets/img/javascript.png";
import c from "../assets/img/c.png";
import ruby from "../assets/img/ruby.png";

import Carousel from "react-native-snap-carousel";

import Svg, { Path } from "react-native-svg";
import settingIcon from "../assets/img/settingIcon.png";

export default function HomeScreen({ navigation }) {
  const sliderWidth = Dimensions.get("window").width;
  let carousel;
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([
    {
      logo: java,
      title: "Java",
    },
    {
      logo: python,
      title: "Python",
    },
    {
      logo: flutter,
      title: "Flutter",
    },
    {
      logo: javascript,
      title: "Javascript",
    },
    {
      logo: c,
    },
    {
      logo: ruby,
      title: "Ruby",
    },
  ]);

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <StatusBar hidden={true} />
      <View style={styles.navWrapper}>
        <View style={styles.navLogo}>
          <Image
            style={{ width: 25, height: 40, marginRight: 1 }}
            source={navLogo}
            width={"100%"}
            height={"100%"}
          />
          <Text style={styles.navTitle}>OB COACH</Text>
        </View>
        <Pressable
          style={styles.settingsIcon}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={{ width: 40, height: 40, marginRight: 1 }}
            source={settingIcon}
          />
        </Pressable>
      </View>
      <View style={styles.navSection}>
        <Text style={styles.greetingMessage}>Hello,</Text>
        <Text style={styles.username}>User</Text>
        <View style={styles.courseHeaderContainer}>
          <Text style={styles.courseHeader}>FREE COURSES</Text>
        </View>
      </View>
      <View>
        <Carousel
          layout={"default"}
          ref={(ref) => (carousel = ref)}
          data={carouselItems}
          sliderWidth={sliderWidth}
          sliderHeight={40}
          itemWidth={300}
          renderItem={_renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
      <View style={styles.chatBtnContainer}>
        <Pressable style={styles.chatBtn} onPress={()=> navigation.navigate("Chatbot")}>
          <Text>Chat With Our Intellignent AI Chatbot</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const _renderItem = ({ item, index }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 20,
        height: 100,
        width: 300,
        // padding: 50,
        // margin: 25,
        marginVertical: 25,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        justifyContent: "center",
        // alignContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text style={{ fontSize: 30 }}>{item.title}</Text> */}
      <Image
        style={{ width: 70, height: 70 }}
        source={item.logo}
        width={"100%"}
        height={"100%"}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginLeft: 10,
          color: "rgb(70, 68, 68)",
        }}
      >
        {item.title}
      </Text>
    </View>
  );
};
