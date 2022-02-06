import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function submit() {
    const alt = altura / 100;
    const imc = (peso / (alt * alt)).toFixed(2);

    if (imc < 18.5) {
      alert(
        `SEUS RESULTADOS:\n|| IMC: ${imc} \n|| CLASSIFICAÇÃO: Magreza \n|| OBESIDADE (GRAU): 0`
      );
    } else if (imc >= 18.5 && imc < 24.9) {
      alert(
        `SEUS RESULTADOS:\n|| IMC: ${imc} \n|| CLASSIFICAÇÃO: Normal \n|| OBESIDADE (GRAU): 0`
      );
    } else if (imc > 25 && imc < 29.9) {
      alert(
        `SEUS RESULTADOS:\n|| IMC: ${imc} \n|| CLASSIFICAÇÃO: Sobrepeso  \n|| OBESIDADE (GRAU): I`
      );
    } else if (imc > 30 && imc < 39.9) {
      alert(
        `SEUS RESULTADOS:\n|| IMC: ${imc} \n|| CLASSIFICAÇÃO: Obesidade  \n|| OBESIDADE (GRAU): II`
      );
    } else {
      alert(
        `SEUS RESULTADOS:\n|| IMC: ${imc} \n|| CLASSIFICAÇÃO: Obesidade Grave \n|| OBESIDADE (GRAU): III`
      );
    }
  }

  return (
    <View style={{ borderBottomWidth: 1, borderColor: "purple" }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          marginTop: 20,
          textAlign: "center"
        }}
      >
        3) Calcular o IMC:
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TextInput
          style={styles.input}
          placeholder="peso"
          keyboardType="numeric"
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    margin: 10,
    textAlign: "center"
  },
  input: {
    borderBottomWidth: 2.0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 100,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 20
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 15,
    backgroundColor: "#1e6baa",
    width: 120,
    height: 35,
    borderRadius: 7
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});
