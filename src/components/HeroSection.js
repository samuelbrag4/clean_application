import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const HeroSection = ({ linkImage, title, subtitle, bottonColor }) => {
  return (
    <ImageBackground
      source={{ uri: linkImage }}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.primaryButton}>
            <Text
              style={styles.primaryButtonText}
            >
              Ler mais
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Sobre</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    flex: 1,
    alignItems: "flex-start",
    padding: 24,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    lineHeight: 32,
    marginBottom: 16,
    maxWidth: "90%",
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginBottom: 24,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: "#FF6B95",
    paddingVertical: 10,
    paddingHorizontal: 34,
    borderRadius: 8,
    marginRight: 12,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  secondaryButton: {
    backgroundColor: "#FFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  secondaryButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default HeroSection;
