import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  carContainer: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  subTitle: {
    fontSize: 16,
    color: "#000",
  },
  subTitleCTA: {
    textDecorationLine: "underline",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
