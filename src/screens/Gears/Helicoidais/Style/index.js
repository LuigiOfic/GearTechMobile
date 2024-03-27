import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  linear: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  titulo: {
    ...Platform.select({
      web:{
        marginTop: 140
      },
      android:{
        marginTop: 170
      },
    }),
    fontSize: 30,
    fontWeight: "bold",
    position: 'absolute',
  },
  main: {
    ...Platform.select({
      web: {
        height: "65%",
        width: "30%",
        marginTop: 190
      },
      android: {
        height: 500,
        width: "80%",
        marginTop: 220
      },
    }),
    alignItems: "center",
    backgroundColor: "#C0C9D1",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowRadius: 10,
    position: 'absolute',
    elevation: 15
  },
  box: {
    ...Platform.select({
      web:{
        height: "20%",
        width: "100%",
      },
      android:{
        height: "40%",
        width: "100%",
      },
    }),
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#C0C9D1",
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    ...Platform.select({
      web: {
        height: "45%",
        width: "80%",
      },
      android: {
        height: 40,
        width: "80%",
      },
    }),
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 0.5,
  },
  button: {
    ...Platform.select({
      web: {
        height: "8%",
        marginTop: 10,
      },
      android: {
        height: "8%",
      },
    }),
    width: "50%",
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  txtBtn: {
    color: "white",
  },

  resultContainer: {
    ...Platform.select({
      web: {
        height: "60%",
        width: "80%",
      },
      android: {
        height: "40%",
        width: "90%",
      },
    }),
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 0.5,
  },
  btnRelatorio: {
    ...Platform.select({
      web: {
        height: 40,
        width: "10%",
      },
      android: {
        height: 40,
        width: "30%",
      },
    }),
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#212529",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    position: 'absolute',
    marginTop: 730,
  },
});

export default styles;
