// src/screens/Login/index.js

import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Login/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/Header";
import { loginUser } from "../../service/Auth";

const LoginScreen = () => {
  const [nif, setNif] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if(loginUser(nif, senha)){
      console.log('Login efetuado!');
      navigation.navigate("List");
    }else{
      console.log("NIF ou Senha incorrteos!");
    }
  };

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
              onChangeText={text => setNif(text)}
              value={nif}
              placeholder="NIF"
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              onChangeText={(text) => setSenha(text)}
              value={senha}
              keyboardType="numeric"
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
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
