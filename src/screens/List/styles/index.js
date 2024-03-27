import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  linear: {
    height: "100%",
    alignItems: "center",
  },
  main: {
    ...Platform.select({
      web: {
        height: "60%",
        width: "30%",
      },
      android: {
        height: "50%",
        width: "80%",
        marginTop: 50
      },
      ios:{
        width: "80%"
      },
    }),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "#C0C9D1",
    borderRadius: 10,
    marginTop: 40,
    elevation: 15
  },
  box: {
    height: "70%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#C0C9D1",

    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    height: "15%",
    width: "70%",
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    height: 40,
    width: 250,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.5
  },
  txtBtn: {
    color: "black",
  },
});

export default style;
