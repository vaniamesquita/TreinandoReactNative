import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  const zerarContador = () => {
    setContador(0);
  };

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
        4) Contador:
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity style={styles.button} onPress={incrementarContador}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={decrementarContador}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={zerarContador}>
          <Text style={styles.buttonText}>zerar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>{contador}</Text>
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
    marginBottom: 20,
    marginTop: 20
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 15,
    backgroundColor: "#1e6baa",
    width: 55,
    height: 30,
    borderRadius: 7
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  }
});
