import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

export default ({ pessoas }) => {
  const [pessoa, setPessoa] = useState({});

  useEffect(() => {
    axios
      .get(pessoas, {})
      .then((resposta) => {
        setPessoa(resposta.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View>
      <Text>{pessoa.name}</Text>
    </View>
  );
};
