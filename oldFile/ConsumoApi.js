import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import axios from "axios";
import Personagens from "./Personagens";

export default () => {
  const [personagem, setPersonagem] = useState({});

  function submit() {
    return Math.floor(Math.random() * 82 + 1);
  }

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${submit()}`, {})
      .then((resposta) => {
        setPersonagem(resposta.data);
        //let filmes = resposta.data.films.map((data) => data.films);

        console.log(resposta);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View>
      <Personagens
        name={personagem.name}
        mass={personagem.peso}
        height={personagem.height}
        films={personagem.films}
      />
    </View>

    // <View
    //   style={{ width: 200, height: 200, alignSelf: "center", padding: 20 }}
    // >
    //   <Button title="Outro Personagem" onPress={submit}></Button>
    // </View>
  );
};

// const styles = StyleSheet.create({
//   tabela: {
//     bbackgroundColor: "whitesmoke",
//     width: 400,
//     textAlign: "center",
//     borderWidth: 5,
//     borderColor: "pink"
//   }
// })
