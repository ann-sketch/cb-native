import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  navWrapper: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 94,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  navTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "rgb(53, 143, 228)",
  },
  settingsettingsIcon: {},
  navLogo: {
    flexDirection: "row",
  },
  greetingMessage: {
    fontSize: 18,
    paddingTop: 24,
    fontWeight: "bold",
    letterSpacing: 0.8,
    color: "rgb(133, 133, 133)",
    paddingLeft: 10,
  },
  username: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgb(47, 47, 47)",
    paddingLeft: 10,
    marginBottom: 24,
    marginRight: 10,
    letterSpacing: 0.8,
  },
  courseHeaderContainer: {
    alignItems: "flex-end",
    marginRight: -15,
  },
  courseHeader: {
    borderTopColor: "rgb(53, 152, 245)",
    borderTopWidth: 5,
    borderBottomColor: "rgb(53, 152, 245)",
    borderBottomWidth: 5,
    borderLeftColor: "rgb(53, 152, 245)",
    borderLeftWidth: 5,
    borderRadius: 20,
    width: 180,
    color: "rgb(106, 111, 117)",
    fontSize: 16,
    paddingLeft: 25,
    paddingTop: 10,
    paddingTop: 10,
    alignItems: "center",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  chatBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  chatBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});

export default styles;
