// src/screens/Register/index.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../Register/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../components/Header";
import axios from "axios";

const RegisterScreen = () => {
  const [nomeAlunos, setNomeAlunos] = useState("");
  const [numMatricula, setNumMatricula] = useState("");
  const [emailEdu, setEmailEdu] = useState("");
  const [senha, setSenha] = useState("");
  const [turma, setTurma] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const criarAlunos = () => {
    const apiUrl = "http://localhost:8080/aluno";
    if (senha === confirmarSenha) {
      navigation.navigate("Login")
      axios.post(apiUrl, {
        nome: nomeAlunos,
        num_matricula: numMatricula,
        email: emailEdu,
        turma: turma,
        senha: senha
      });
      console.log("Cadastro efetuado com sucesso!")
    }else{
      console.log("Erro Senha Invalida!")
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
          <Text style={styles.text}>Informe suas informações</Text>
          <Text style={styles.text}>pessoais</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              value={nomeAlunos}
              placeholder="Nome e Sobrenome"
              onChangeText={(text) => setNomeAlunos(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={numMatricula}
              placeholder="Número da Matrícula"
              onChangeText={(text) => setNumMatricula(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={turma}
              placeholder="Turma"
              onChangeText={(text) => setTurma(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={emailEdu}
              placeholder="Email Educacional"
              onChangeText={(text) => setEmailEdu(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={senha}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
            ></TextInput>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmarSenha(text)}
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={criarAlunos}
            >
              <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default RegisterScreen;
