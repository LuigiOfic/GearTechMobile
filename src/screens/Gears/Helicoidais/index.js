import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Style";

function GearCalculator() {
  const [moduloHelicoidal, setModuloHelicoidal] = useState("");
  const [anguloInclinacao, setAnguloInclinacao] = useState("");
  const [numDentes, setNumDentes] = useState("");
  const [distanciaEixos, setDistanciaEixos] = useState("");
  const [diametroPrimitivo, setDiametroPrimitivo] = useState("");
  const [moduloNormal, setModuloNormal] = useState("");
  const [passoNormal, setPassoNormal] = useState("");
  const [circuloPrimitivo, setCirculoPrimitivo] = useState("");
  const [circuloCabeca, setCirculoCabeca] = useState("");
  const [distanciaEixosInterno, setDistanciaEixosInterno] = useState("");

  const calcularDiametroPrimitivo = () => {
    const Mt = parseFloat(moduloHelicoidal);
    const B = parseFloat(anguloInclinacao);
    const Z = parseInt(numDentes);
    const a = parseFloat(distanciaEixos);

    // Cálculos conforme as fórmulas fornecidas
    const Mn = Mt / Math.cos(B);
    const Pn = Math.PI * Mn;
    const d = Mt * Z;
    const Da = d + 2 * Mn;
    const A = (d + Da) / 2;
    const Pt = Pn / Math.cos(B);
    const d1 = Pt * Z;
    const d2 = d - d1;
    const circuloCabecaInterno = d1 - 2 * Mt;
    const circuloPeInterno = d2 + 2 * Mt;
    const distanciaEixosInterno = (circuloPeInterno - circuloCabecaInterno) / 2;

    // Atualizar os estados com os resultados
    setDiametroPrimitivo(A.toFixed(3));
    setModuloNormal(Mn.toFixed(3));
    setPassoNormal(Pn.toFixed(3));
    setCirculoPrimitivo(d.toFixed(3));
    setCirculoCabeca(Da.toFixed(3));
    setDistanciaEixosInterno(distanciaEixosInterno.toFixed(3));
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={["#E9ECEF", "#DEE2E6", "#CED4DA", "#ADB5BD"]}
      >
        <Header></Header>
        <View style={styles.main}>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              placeholder="Módulo Helicoidal"
              value={moduloHelicoidal}
              onChangeText={(text) => setModuloHelicoidal(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Ângulo de Inclinação (B)"
              value={anguloInclinacao}
              onChangeText={(text) => setAnguloInclinacao(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Número de Dentes"
              value={numDentes}
              onChangeText={(text) => setNumDentes(text)}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Distância entre Eixos (a)"
              value={distanciaEixos}
              onChangeText={(text) => setDistanciaEixos(text)}
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={calcularDiametroPrimitivo}
          >
            <Text style={styles.txtBtn}>Cálcular</Text>
          </TouchableOpacity>

          {diametroPrimitivo !== "" && (
            <View style={styles.resultContainer}>
              <Text style={styles.result}>
                Diâmetro Primitivo: {diametroPrimitivo}
              </Text>
              <Text style={styles.result}>Módulo Normal: {moduloNormal}</Text>
              <Text style={styles.result}>Passo Normal: {passoNormal}</Text>
              <Text style={styles.result}>
                Círculo Primitivo: {circuloPrimitivo}
              </Text>
              <Text style={styles.result}>
                Círculo da Cabeça: {circuloCabeca}
              </Text>
              <Text style={styles.result}>
                Distância entre Eixos Interno: {distanciaEixosInterno}
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity style={styles.btnRelatorio}>
          <Text style={styles.txtBtn}>Relatório</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

export default GearCalculator;
