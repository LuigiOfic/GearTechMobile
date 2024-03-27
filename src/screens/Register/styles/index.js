import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  linear: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  menu: {
    marginTop: "10%",
    marginLeft: "80%",
  },
  text:{
    fontSize: 19
  },
  main: {
    ...Platform.select({
      web: {
        height: "50%",
        width: "30%",
      },
      android: {
        height: '65%',
        width: '80%',
      },
    }),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "#ADB5BD",
    borderRadius: 10,
    marginTop: '45%',
    position: "absolute",
    elevation: 15
  },
  box: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ADB5BD",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    height: "10%",
    width: "80%",
    borderRadius: 5,
    marginVertical: 8,
  },
  button: {
    marginTop: 30,
    height: "8%",
    width: "70%",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    color: "white",
  },
});

export default style;
