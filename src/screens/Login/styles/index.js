import { StyleSheet, Platform } from "react-native";

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  linear: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  titulo:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    ...Platform.select({
      web: {
        height: "60%",
        width: "30%",
        marginTop: 40
      },
      android: {
        height: 500,
        width: "80%",
        marginTop: 80,
        elevation: 20,
      },
    }),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowRadius: 10,
    backgroundColor: "#ADB5BD",
    borderRadius: 10,
    
  },
  box: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#ADB5BD",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    height: "14%",
    width: "80%",
    borderRadius: 5,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.5
  },
  button: {
    marginTop: 30,
    height: "12%",
    width: "60%",
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
