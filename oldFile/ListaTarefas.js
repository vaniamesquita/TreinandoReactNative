import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Modal
} from "react-native";

import TaskList from "./TaskList/index";

export default () => {
  const [task, setTask] = useState([
    { key: 1, task: "assistir aula" },
    { key: 2, task: "assistir aula2" },
    { key: 3, task: "assistir aula3" },
    { key: 4, task: "assistir aula4" },
    { key: 5, task: "assistir aula estudar" },
    { key: 6, task: "assistir aula6 assistir aula" }
  ]);

  // modal
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />

      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task} //vem todos os itens da lista
        //passa o data la no index (tasklist) como props = ({task})
        // e ai no texto chama o {data.task}
        keyExtractor={(item) => String(item.key)} //chave para organizar
        renderItem={({ item }) => <TaskList data={item} />}
      />
      {/* renderItem = cada vez que passar no item, ele vai renderizar */}

      {/* Modal: adicionar nossa task, botao */}

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView>
          <Text>Modal 123</Text>
        </SafeAreaView>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={() => setOpen(true)}>
        +
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171d31"
  },
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: "center",
    color: "white"
  },
  button: {
    color: "white",
    backgroundColor: "red",
    fontSize: 50,
    width: 60,
    height: 60,
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 30,
    position: "absolute",
    alignItems: "center",
    right: 25,
    top: 600,
    elevation: 2,
    zIndex: 9,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  }
});
