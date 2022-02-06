import React, { useEffect, useState } from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

export default () => {
  const [personagem, setPersonagem] = useState({});

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character", {})
      .then((resposta) => {
        setPersonagem(resposta.data.results);
        // console.log(resposta);
        // console.log(resposta.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View style={{ borderBottomWidth: 1, borderColor: "purple" }}>
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 20,
          textAlign: "center"
        }}
      >
        8) Api Rick And Morty + Flatlist:
      </Text>

      <FlatList
        data={personagem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{
                  uri: item.image
                }}
              />

              <View style={styles.containerDados}>
                <Text>
                  <Text style={styles.textoTitulo}>Nome: </Text>
                  {item.name}
                </Text>

                <Text>
                  <Text style={styles.textoTitulo}>Espécie: </Text>
                  {item.species}
                </Text>

                {/* <Text>
                <Text style={styles.textoTitulo}>Localização: </Text>
                {item.location.name}
              </Text> */}

                <Text>
                  <Text style={styles.textoTitulo}>Episódios: </Text>
                  {item.episode.length}
                </Text>

                <Text>
                  <Text style={styles.textoTitulo}>Status: </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: item.status === "Alive" ? "green" : "red"
                    }}
                  >
                    {item.status}
                  </Text>
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

// const { width, height } = Dimensions.get("window");
// const IMAGE_WIDTH = width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "left",
    alignItens: "Center",
    width: "100vw",
    height: 100,
    // flexWrap: "wrap",
    flexShrink: 1,
    borderWidth: 1,
    borderStyle: "dotted",
    paddingLeft: 5
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignSelf: "center",

    alignItens: "left"
  },
  textoTitulo: {
    fontWeight: "bold"
  },
  containerDados: {
    alignSelf: "center",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 10
  }
});
