import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

const CorpoScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#DBBD9C" activePage="Corpo" />

      <HeroSection
        linkImage={
          "https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"
        }
        title="Aqui a sua Beleza Entra nem Primeiro Lugar"
        subtitle="Quer saber como ter uma pele naturalmente bonita? Descubra 8 dicas de beleza simples para começar hoje mesmo e deixar a pele ainda mais radiante."
        bottonColor="#DBBD9C"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
});
export default CorpoScreen;
