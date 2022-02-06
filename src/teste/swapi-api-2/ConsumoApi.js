import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import Filme from "./Filme";

export default () => {
  const [personagem, setPersonagem] = useState({});

  const [id, setId] = useState(1);

  function gerarIdAleatorio() {
    const random = Math.floor(Math.random() * 82 + 1);
    setId(random);
  }

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`, {})
      .then((resposta) => {
        setPersonagem(resposta.data);
        // console.log(resposta);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

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
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Filme filmes={item} />}
          />
        </View>
      </View>
      <TouchableOpacity onPress={gerarIdAleatorio} style={styles.button}>
        <Text style={styles.buttonText}>Outro Personagem</Text>{" "}
      </TouchableOpacity>
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
    backgroundColor: "#112",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    padding: 13
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 15,
    backgroundColor: "#1e6baa",
    width: 160,
    height: 40,
    borderRadius: 7
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }
});
