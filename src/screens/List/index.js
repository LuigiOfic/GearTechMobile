// src/screens/List/index.js

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/Header";

const ListScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header></Header>
        <View style={styles.main}>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Retos")}
            >
              <Text style={styles.txtBtn}>Dentes Retos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Helicoidais")}
            >
              <Text style={styles.txtBtn}>Dentes Helicoidais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Conicos")}
            >
              <Text style={styles.txtBtn}>Dentes Conicos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Transmissao")}
            >
              <Text style={styles.txtBtn}>Dentes com Transmissão</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.txtBtn}>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default ListScreen;
