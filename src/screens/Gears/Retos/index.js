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

const EngrenagemCalculator = () => {
  const [modulo, setModulo] = useState("");
  const [numeroDentes, setNumeroDentes] = useState("");
  const [resultados, setResultados] = useState(null);

  const calcularEngrenagem = () => {
    if (!modulo || !numeroDentes) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const moduloNum = parseFloat(modulo);
    const numeroDentesNum = parseInt(numeroDentes, 10);

    if (isNaN(moduloNum) || isNaN(numeroDentesNum)) {
      alert("Entradas inválidas. Certifique-se de inserir números válidos.");
      return;
    }

    const circuloPrimitivo = moduloNum * numeroDentesNum;
    const passo = Math.PI * moduloNum;
    const folgaCabeca = 0.167 * moduloNum;
    const alturaCabecaDente = moduloNum;
    const alturaPeDente = moduloNum + folgaCabeca;
    const alturaDente = 2 * moduloNum + folgaCabeca;
    const circuloCabeca = circuloPrimitivo + 2 * moduloNum;
    const circuloPe = circuloPrimitivo - 2 * (moduloNum + folgaCabeca);
    const distanciaEixos = circuloPrimitivo / 2 + circuloPrimitivo / 2;
    const circuloCabecaInterno = circuloPrimitivo - 2 * moduloNum;
    const circuloPeInterno = circuloPrimitivo + 2 * (moduloNum + folgaCabeca);
    const distanciaEixosInterno = (circuloPe - circuloCabeca) / 2;

    setResultados({
      circuloPrimitivo: circuloPrimitivo.toFixed(3),
      passo: passo.toFixed(3),
      folgaCabeca: folgaCabeca.toFixed(3),
      alturaCabecaDente: alturaCabecaDente.toFixed(3),
      alturaPeDente: alturaPeDente.toFixed(3),
      alturaDente: alturaDente.toFixed(3),
      circuloCabeca: circuloCabeca.toFixed(3),
      circuloPe: circuloPe.toFixed(3),
      distanciaEixos: distanciaEixos.toFixed(3),
      circuloCabecaInterno: circuloCabecaInterno.toFixed(3),
      circuloPeInterno: circuloPeInterno.toFixed(3),
      distanciaEixosInterno: distanciaEixosInterno.toFixed(3),
    });
  };

  return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.linear}
          colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
        >
          <Header></Header>
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
              onPress={calcularEngrenagem}
              style={styles.button}
            >
              <Text style={styles.txtBtn}>Calcular</Text>
            </TouchableOpacity>
            {resultados && (
              <View style={styles.resultContainer}>
                {Object.entries(resultados).map(([key, value]) => (
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

export default EngrenagemCalculator;
