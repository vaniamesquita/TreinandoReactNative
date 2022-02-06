import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Text, FlatList } from "react-native";
import axios from "axios";
import Filme from "./Filme";

export default () => {
  const [personagem, setPersonagem] = useState({});
  const [id, setId] = useState(Math.floor(Math.random() * 82 + 1));

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`, {})
      .then((resposta) => {
        setPersonagem(resposta.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View style={{ borderBottomWidth: 1.5, borderColor: "#219ebc" }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          marginTop: 20,
          textAlign: "center"
        }}
      >
        6) Swapi - Axios + Flatlist:
      </Text>

      <View style={styles.container}>
        <View style={styles.columns}>
          <Text style={styles.header}>Nome</Text>
          <Text style={styles.text}>{personagem.name}</Text>
        </View>
        <View style={styles.columns}>
          <Text style={styles.header}>Peso</Text>
          <Text style={styles.text}>{personagem.mass}</Text>
        </View>
        <View style={styles.columns}>
          <Text style={styles.header}>Altura</Text>
          <Text style={styles.text}>{personagem.height}</Text>
        </View>
        <View style={styles.columns}>
          <Text style={styles.header}>Filmes</Text>
          <FlatList
            data={personagem.films}
            style={{ padding: 10 }}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <Filme filmes={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    flexDirection: "row",
    margin: 20,
    justifyContent: "center",
    alignItem: "center",
    alignSelf: "center"
  },
  columns: {
    borderWidth: 1,
    borderColor: "#022a3d"
  },
  text: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
    justifyContent: "center",
    padding: 10
  },
  header: {
    backgroundColor: "#0471a3",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    padding: 13
  }
});
