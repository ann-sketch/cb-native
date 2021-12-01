import React, { Component } from "react";
import WebView from "react-native-webview";
import { View, Text } from "react-native";

export default function ChatScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 24 }}>
      <WebView
        source={{ uri: "https://job-coach-fab96.web.app/chatbot" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
}
