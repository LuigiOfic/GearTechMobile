import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from "./styles";
const GearTransmissionExample = () => {
  const [initialRotation, setInitialRotation] = useState('22');
  const [finalRotation, setFinalRotation] = useState('24');
  const [totalTransmissionRatio, setTotalTransmissionRatio] = useState('1.32');
  const [motorRotation, setMotorRotation] = useState(0);
  const [drivenRotation, setDrivenRotation] = useState(0);

  const handleCalculate = () => {
    // Lógica para calcular outras propriedades com base nas informações fornecidas

    // Exemplo: Calcular as rotações nas engrenagens motoras e movidas
    const motorRotationValue = (parseFloat(finalRotation) / parseFloat(totalTransmissionRatio)).toFixed(2);
    const drivenRotationValue = (parseFloat(initialRotation) * parseFloat(totalTransmissionRatio)).toFixed(2);

    setMotorRotation(parseFloat(motorRotationValue));
    setDrivenRotation(parseFloat(drivenRotationValue));

    // Mais lógica aqui...
  };

  useEffect(() => {
    handleCalculate();
  }, [initialRotation, finalRotation, totalTransmissionRatio]);

  return (
    <View style={styles.container}>
      <Text>Exemplo de Acionamento por Engrenagens em React Native:</Text>
      <Text>Rotação Inicial:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
        value={initialRotation}
        onChangeText={(text) => setInitialRotation(text)}
      />
      <Text>Rotação Final:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
        value={finalRotation}
        onChangeText={(text) => setFinalRotation(text)}
      />
      <Text>Relação de Transmissão Total:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        keyboardType="numeric"
        value={totalTransmissionRatio}
        onChangeText={(text) => setTotalTransmissionRatio(text)}
      />
      <Button
        title="Calcular"
        onPress={handleCalculate}
      />
      <Text>Rotação do Motor: {motorRotation} RPM</Text>
      <Text>Rotação Movida: {drivenRotation} RPM</Text>
      {/* Outras informações podem ser exibidas aqui */}
    </View>
  );
};

export default GearTransmissionExample;
