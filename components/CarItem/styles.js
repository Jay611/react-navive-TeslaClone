import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: "100%",
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
  title: {
    fontSize: 40,
    fontWeight: "600",
    elevation: 1,
  },
  titles: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
