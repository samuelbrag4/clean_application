import React from "react";
import { View, Text, StyleSheet } from "react-native";
const ProdutoPageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Produto</Text>
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
export default ProdutoPageScreen;
