import React from "react";
import { View, Text, StyleSheet } from "react-native";
const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Sobre</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  text: { fontSize: 18, fontWeight: "bold", color: "#333" },
});
export default SobreScreen;
