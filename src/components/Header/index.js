import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerMenu}>
        <Image
          style={styles.menu}
          source={require("../../../assets/image/Menu.png")}
        ></Image>
        <Image
          style={styles.logo}
          source={require("../../../assets/image/Logo.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      web: {
        height: "25%",
        width: "100%",
      },
      android: {
        height: '20%',
        width: '80%',
      },
      ios: {
        height: "20%",
        width: "100%",
      },
      alignItems: "center",
      justifyContent: 'center'
    }),
  },
  menu: {
    ...Platform.select({
      web: {
        marginTop: 10,
        marginLeft: "90%",
        marginLeft: '80%'
      },
      android: {
        marginTop: "10%",
        alignItems: "center",
        alignSelf: 'flex-end',

      },
      ios: {
        marginTop: "10%",
        marginLeft: "80%",
      },
      

    }),
  },
  logo: {
    
    alignSelf: 'center',
    height: 100,
    width: 100,
    alignItems: 'center',
  },
});
