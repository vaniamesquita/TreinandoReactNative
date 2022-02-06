import React from "react";
import { View } from "react-native";
import Titulo from "./Titulo";
import SomaDoisNumeros from "./SomaDoisNumeros";
import NumeroParImpar from "./NumeroParImpar";
import CalculaIMC from "./CalculaIMC";
import Contador from "./Contador";

import BotaoAleatorio from "./BotaoAleatorio";
import Pessoas from "./Pessoas";
import ConsumoApi from "./swapi-api-2/ConsumoApi";

import RickAndMortyPersonagens from "./rick-and-morty-api/RickAndMortyPersonagens";
import RickAndMortyPersonagens2 from "./rick-and-morty-api-2/RickAndMortyPersonagens2";

export default function App() {
  return (
    <View style={{ backgroundColor: "" }}>
      <Titulo titulo="Treinando React Native" />
      <SomaDoisNumeros />
      <NumeroParImpar />
      <CalculaIMC />
      <Contador />
      <BotaoAleatorio>Botao 1</BotaoAleatorio>
      <BotaoAleatorio>Botão 2</BotaoAleatorio>
      <BotaoAleatorio>Botããããããooo 3</BotaoAleatorio>
      <ConsumoApi />
      <Pessoas />
      {/* <RickAndMortyPersonagens /> */}
      <RickAndMortyPersonagens2 />
    </View>
  );
}
