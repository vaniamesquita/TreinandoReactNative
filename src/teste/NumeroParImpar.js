import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default () => {
  const [num, setNum] = useState("");
  const [resultado, setResultado] = useState("");

  function submit() {
    const verificaParImpar = num % 2 === 0 ? "Par" : "Impar";
    return setResultado(verificaParImpar);
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
        2) Número é Par ou Impar:
      </Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="digite um numero"
          keyboardType="numeric"
          value={num}
          onChangeText={(num) => setNum(num)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Resultado</Text>
      </TouchableOpacity>

      <Text style={styles.text}>O número é: {resultado}</Text>
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
    alignSelf: "center",
    borderBottomWidth: 2.0,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
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
