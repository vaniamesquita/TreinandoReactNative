import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Titulo = ({ titulo }) => {
  return (
    <View>
      <Text style={styles.text}>{titulo}</Text>
    </View>
  );
};

export default Titulo;

const styles = StyleSheet.create({
  text: {
    height: 90,
    justifyContent: "center",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#112",
    color: "#fff",
    padding: 20
  }
});
