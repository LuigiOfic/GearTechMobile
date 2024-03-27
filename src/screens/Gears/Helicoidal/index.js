// src/screens/Helicoidal/index.js

import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../../styles";

function DentesHelicoidaisScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dentes Helicoidais</Text>
      <Button
        title="Calcular"
        onPress={() => navigation.navigate("List")}
        
      />
    </View>
  );
}

export default DentesHelicoidaisScreen;