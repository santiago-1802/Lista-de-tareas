import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
