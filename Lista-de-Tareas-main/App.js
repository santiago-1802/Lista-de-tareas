import React from "react";
import { StyleSheet, View } from "react-native";
import Titulo from "./Components/Header.jsx";
import Buscador from "./Components/Content.jsx"; 

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo text="Lista de Tareas" />
      <Buscador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'stretch',
    justifyContent: 'center', 
  },
});

