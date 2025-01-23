import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, TextInput, Button, FlatList } from "react-native";
import NewTask from "./NewTask";

export default Content = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [textoTarea, setTextoTarea] = useState('');

  const agregarTarea = () => {
    if (textoTarea.length > 0) {
      setListaTareas([...listaTareas, { id: Date.now().toString(), texto: textoTarea, completada: false }]);
      setTextoTarea('');
    }
  };

  const cambiarEstadoTarea = (id) => {
    const nuevasTareas = listaTareas.map(tarea => 
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setListaTareas(nuevasTareas);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            onChangeText={setTextoTarea} 
            value={textoTarea} 
            placeholder='Nueva tarea' 
            placeholderTextColor='#888'
          />
          <Button title='Agregar tarea' onPress={agregarTarea} />
        </View>
      </SafeAreaView>
      
      <FlatList 
        data={listaTareas}
        renderItem={({ item }) => (
          <NewTask 
            tarea={item} 
            cambiarEstado={() => cambiarEstadoTarea(item.id)} 
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',          
    justifyContent: 'center',     
    alignItems: 'center',          
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 10,               
    flex: 1,                       
  },
});
