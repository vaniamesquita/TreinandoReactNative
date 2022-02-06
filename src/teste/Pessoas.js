import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default () => {
  const pessoas = () => {
    const p = [
      { id: 1, Nome: "Jose", Sexo: "M", Estado: "MG" },
      { id: 2, Nome: "Joao", Sexo: "M", Estado: "RJ" },
      { id: 3, Nome: "Maria", Sexo: "F", Estado: "SP" },
      { id: 4, Nome: "Renata", Sexo: "F", Estado: "BA" },
      { id: 5, Nome: "Leandro", Sexo: "M", Estado: "BH" },
      { id: 6, Nome: "Carlos", Sexo: "M", Estado: "CE" },
      { id: 7, Nome: "Vania", Sexo: "F", Estado: "RJ" },
      { id: 8, Nome: "Pedro", Sexo: "M", Estado: "RS" },
      { id: 9, Nome: "Isabella", Sexo: "F", Estado: "SP" }
    ];

    return p.map((item, indice) => {
      return (
        <View
          style={{
            borderWidth: 1,
            justifyContent: "space-around",
            textAlign: "center",
            alignSelf: "center",
            width: 300,

            flexDirection: "row",
            backgroundColor: item.Sexo === "F" ? "pink" : "lightblue"
          }}
        >
          <Text style={style.text}>{item.id}</Text>
          <Text style={style.text}>{item.Nome}</Text>
          <Text style={style.text}> {item.Sexo} </Text>
          <Text style={style.text}> {item.Estado}</Text>
        </View>
      );
    });
  };

  return (
    <View
      style={{ borderBottomWidth: 1, borderColor: "purple", paddingBottom: 20 }}
    >
      <View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "bold",
            marginTop: 12,
            textAlign: "center",
            marginBottom: 20
          }}
        >
          7) Colorir linhas: Azul para M e Rosa para F:
        </Text>
      </View>
      {pessoas()}
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 5
  }
});
