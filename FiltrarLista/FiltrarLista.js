import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TextInput
} from "react-native";
import axios from "axios";

export default () => {
  const [usuarios, setUsuarios] = useState({});

  useEffect(() => {
    if (searchText === "") {
      setList(usuarios);
    } else {
      setList(
        usuarios.filter((item) => {
          item.name.toLowerCase().indexOf(searchText.toLowerCase() > -1);
        })
      );
    }
  }, [searchText]); //toda vez que o campo de procura de texto mudar, o userEffect vai ser acionado

  return (
    <View>
      <TextInput
        placeholder="pesquise uma pessoa"
        value={searchText}
        onChangeText={(t) => setSearchText(t)}
      />
    </View>
  );
};
