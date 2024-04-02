import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Style";
import { CalculosHelicoidais } from "../../../service/SHelicoidais";

function Helicoidal() {

  const [modulo, setModulo] = useState("");
  const [anguloInclinacao, setAnguloInclinacao] = useState("");
  const [numDentes, setNumDentes] = useState("");
  const [distanciaEixos, setDistanciaEixos] = useState("");
  const [resultados, setResultado] = useState(null);

  const Calculator = () => {
    const resultadosCalculo = CalculosHelicoidais( modulo, anguloInclinacao, numDentes, distanciaEixos);
    if (resultadosCalculo) {
      setResultado(resultadosCalculo);
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
        <Text style={styles.titulo}>Dentes Helicoidais</Text>
        <View style={styles.main}>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              placeholder="Módulo"
              value={modulo}
              onChangeText={(text) => setModulo(text)}
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
            onPress={Calculator}
          >
            <Text style={styles.txtBtn}>Cálcular</Text>
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
}

export default Helicoidal;
