import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [soma, setSoma] = useState("");

  function submit() {
    const soma = Number(num1) + Number(num2);
    return setSoma(soma);
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
        1) Soma de dois números:
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TextInput
          style={styles.input}
          placeholder="número 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={(num1) => setNum1(num1)}
        />

        <TextInput
          style={styles.input}
          placeholder="número 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={(num2) => setNum2(num2)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={submit}>
        <Text style={styles.buttonText}>Somar</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Resultado: {soma}</Text>
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
