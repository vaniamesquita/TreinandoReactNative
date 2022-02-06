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
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState(usuarios);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {})
      .then((response) => {
        setUsuarios(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <FlatList
      data={usuarios}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View style={{ flex: 1, marginLeft: 10 }}>
            <View>
              <Image
                source={{
                  uri: `https://i.pravatar.cc/150?img=${item.id}`
                }}
              />
            </View>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        );
      }}
    />
  );
};
