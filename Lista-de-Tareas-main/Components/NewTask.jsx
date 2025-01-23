import React from "react";
import { StyleSheet, View, Text, CheckBox } from "react-native";

export default NewTask = ({ tarea, cambiarEstado }) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox 
        value={tarea.completada} 
        onValueChange={cambiarEstado} 
        style={styles.checkbox}
      />
      <Text style={[styles.label, tarea.completada && styles.tachado]}>
        {tarea.texto}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: '#fff',
  },
  tachado: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
