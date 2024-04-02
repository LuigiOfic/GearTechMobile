import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Calculos } from "../../../service/SDentesRetos";

const DentesRetos = () => {
  const [modulo, setModulo] = useState("");
  const [numeroDentes, setNumeroDentes] = useState("");
  const [resultados, setResultados] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = Calculos(modulo, numeroDentes);
    if (resultadosCalculo) {
      setResultados(resultadosCalculo);
    } else {
      alert("Por favor, preencha todos os campos com valores válidos.");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header />
        <Text style={styles.titulo}>Dentes Retos</Text>
        <View style={styles.main}>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              placeholder="Módulo"
              keyboardType="numeric"
              value={modulo}
              onChangeText={(text) => setModulo(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Número de Dentes"
              keyboardType="numeric"
              value={numeroDentes}
              onChangeText={(text) => setNumeroDentes(text)}
            />
          </View>

          <TouchableOpacity
            onPress={Calculator}
            style={styles.button}
          >
            <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableOpacity>
          {resultados && (
            <View style={styles.resultContainer}>
              {Object.entries(resultados).map(([key, value]) => (
                <Text key={key} style={styles.resultText}>{`${key}: ${value}`}</Text>
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

export default DentesRetos;
