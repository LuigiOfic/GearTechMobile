import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";
import { calcularValores } from "../../../service/SConicos";

const Conicos = () => {
  const [modulo, setModulo] = useState("");
  const [numeroDentes, setNumeroDentes] = useState("");
  const [resultado, setResultado] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = calcularValores(modulo, numeroDentes);
    if (resultadosCalculo) {
      setResultado(resultadosCalculo);
    } else {
      setResultado("Por favor, preencha todos os campos com valores válidos.");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header />

        <View style={styles.main}>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              placeholder="Módulo"
              onChangeText={setModulo}
              value={modulo}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Número de Dentes"
              onChangeText={setNumeroDentes}
              value={numeroDentes}
              keyboardType="numeric"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={Calculator}>
            <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableOpacity>

          {resultado && (
            <View style={styles.resultContainer}>
              {Object.entries(resultado).map(([key, value]) => (
                <Text
                  key={key}
                  style={styles.resultText}
                >{`${key}: ${value}`}</Text>
              ))}
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.btnRelatorio}>
          <Text style={styles.txtBtn}>Relatório</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Conicos;
