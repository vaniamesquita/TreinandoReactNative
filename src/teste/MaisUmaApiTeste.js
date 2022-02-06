import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

export default () => {
  const [album, setalbum] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/`, {})
      .then((results) => {
        setalbum(results.data);
        console.log(results.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <View styles={{ marginTop: 10 }}>
      <FlatList
        data={album}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View styles={{ marginTop: 10 }}>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
