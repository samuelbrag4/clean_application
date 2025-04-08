import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const BlogArtigoScreen = () => {
  const route = useRoute();
  const { articleId } = route.params;

  // Aqui você pode buscar o artigo completo baseado no ID
  // Por enquanto, vamos usar o conteúdo estático que você já tem

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Mantenha todo o conteúdo que você já tinha sobre pele seca */}
        {/* ... */}
      </ScrollView>
    </View>
  );
};

// Mantenha os styles que você já tinha
const styles = StyleSheet.create({
  // ...
});

export default BlogArtigoScreen;