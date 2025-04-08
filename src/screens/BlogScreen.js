import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const BlogScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#00DAC7" activePage="Blog" />

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.text}>Página Blog</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default BlogScreen;