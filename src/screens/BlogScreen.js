import React from "react";
import { View, Text, StyleSheet } from "react-native";
const BlogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página Blog</Text>
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
export default BlogScreen;
