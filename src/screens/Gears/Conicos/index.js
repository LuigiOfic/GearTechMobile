import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Header } from "../../../components/Header";

const MeuProjeto = () => {
  const [modulo, setModulo] = useState("");
  const [numeroDentes, setNumeroDentes] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const moduloFloat = parseFloat(modulo);
    const numeroDentesInt = parseInt(numeroDentes);

    if (isNaN(moduloFloat) || isNaN(numeroDentesInt)) {
      setResultado("Por favor, insira valores válidos para os parâmetros.");
      return;
    }

    const diametroCoroa = moduloFloat * numeroDentesInt;
    const passoAxial = Math.PI * moduloFloat;
    const raioTopoCoroa = 0.35 * moduloFloat;
    const diametroPrimitivo = diametroCoroa + 2 * raioTopoCoroa;
    const passoCoroa = Math.PI * moduloFloat;
    const diametroExterno = diametroPrimitivo + 2 * moduloFloat;
    const raioTopoCoroa2 = 1.25 * raioTopoCoroa;
    const parafusoSemFim = diametroPrimitivo / moduloFloat;
    const passoAxialParafuso = Math.PI * moduloFloat;
    const alturaElevacao = 0.5 * moduloFloat;

    setResultado({
      diametroCoroa: diametroCoroa.toFixed(3),
      passoAxial: passoAxial.toFixed(3),
      raioTopoCoroa: raioTopoCoroa.toFixed(3),
      diametroPrimitivo: diametroPrimitivo.toFixed(3),
      passoCoroa: passoCoroa.toFixed(3),
      diametroExterno: diametroExterno.toFixed(3),
      raioTopoCoroa2: raioTopoCoroa2.toFixed(3),
      parafusoSemFim: parafusoSemFim.toFixed(3),
      passoAxialParafuso: passoAxialParafuso.toFixed(3),
      alturaElevacao: alturaElevacao.toFixed(3),
    });
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

          <TouchableOpacity style={styles.button} onPress={calcular}>
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

export default MeuProjeto;
