import ProdutoPageScreen from "../src/screens/ProdutoPageScreen.js"
import React from "react";
import { View, StyleSheet } from "react-native";

export default function ProdutoPage () {
  return (
    <View style={styles.container}>
     <ProdutoPageScreen/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFA",
  },
  
});
