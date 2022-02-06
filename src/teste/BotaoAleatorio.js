import React from "react";
import { View, Text, Button } from "react-native";

export default ({ children }) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderColor: "purple",
        paddingBottom: 20
      }}
    >
      <Text
        style={{
          fontSize: 19,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
          textAlign: "center"
        }}
      >
        5) Usando children:
      </Text>
      <View
        style={{
          borderBottomWidth: 10,
          borderColor: "#0471a3",
          width: "50%",
          justifyContent: "center",
          alignSelf: "center"
        }}
      >
        <Button
          title={children}
          color="#cc70cc"
          onPress={() => alert(`Oi eu sou o ${children}`)}
        ></Button>
      </View>
    </View>
  );
};
