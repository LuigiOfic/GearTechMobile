// src/screens/Login/index.js

import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Login/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/Header";

const LoginScreen = () => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header></Header>
        <View style={styles.main}>
          <Text style={styles.titulo}>Insira suas informações pessoais</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setNome(text)}
              placeholder="Nome"
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Número da Matrícula"
              onChangeText={(text) => setMatricula(text)}
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.txtBtn}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginScreen;
