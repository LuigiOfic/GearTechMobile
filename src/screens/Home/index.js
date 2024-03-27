// src/screens/Home/index.js

import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../../../assets/image/BackImage.png")}
            style={styles.background}
          >
            <View style={styles.backlogos}>
              <Image
                style={styles.menu}
                source={require("../../../assets/image/Menu.png")}
              />
              <Image
                style={styles.logo}
                source={require("../../../assets/image/Logo.png")}
              />
            </View>
            <View style={styles.backtitle}>
              <Text style={styles.title}> GearTech </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <Text style={styles.MsgB}>Bem Vindo! </Text>
          <Text style={styles.Msg}>
            Desenvolvemos um software capaz de poupar seu tempo quando mais
            precisa!
          </Text>

          <View style={styles.main}>
            <View style={styles.mainMiddle}>
              <View style={styles.mainButtons}>
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.txtBtn}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Btn}
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={styles.txtBtn}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainImage}>
                <Image
                  style={styles.twoGear}
                  source={require("../../../assets/image/TwoGears.png")}
                ></Image>
              </View>
            </View>
          </View>

          <Text style={styles.Msg}>
            Para poupar seu tempo e ainda assim obter resultados precisos e
            imediatos.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
