import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";

export default ({ filmes }) => {
  const [filme, setFilme] = useState({});

  useEffect(() => {
    axios
      .get(filmes, {})
      .then((resposta) => {
        setFilme(resposta.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View>
      <Text>
        {" "}
        {"\u2B29"} {filme.title}
      </Text>
    </View>
  );
};
