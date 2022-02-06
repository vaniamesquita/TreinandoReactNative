import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from "react-native";

export default function TaskList({ data }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <CheckBox></CheckBox>
      </TouchableOpacity>
      <View>
        <Text style={styles.task}> {data.task} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 7,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  },
  task: {
    color: "#121212",
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20
  }
});
