import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BlogScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Imagem grande no topo */}
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e' }}
        style={styles.headerImage}
        resizeMode="cover"
      />
      
      {/* Título */}
      <Text style={styles.title}>Como cuidar da pele seca?</Text>
      
      {/* Introdução */}
      <Text style={styles.introText}>
        A pele seca pode causar desconforto, descamação e até irritações. Se você sente sua pele áspera ou sem vida, não se preocupe! Com alguns cuidados diários, é possível deixá-la hidratada e saudável. Confira as melhores dicas!
      </Text>

      {/* Lista de dicas */}
      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>1. Limpeza suave 🧼</Text>
        <Text style={styles.tipText}>
          Evite sabonetes agressivos e prefira produtos de limpeza hidratantes. Opte por sabonetes líquidos ou em creme, que limpam sem ressecar.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>2. Hidratação é essencial! 🧴</Text>
        <Text style={styles.tipText}>
          Use um bom hidratante logo após o banho, enquanto a pele ainda está úmida. Ingredientes como ácido hialurônico, glicerina e manteiga de karité ajudam a reter a umidade.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>3. Evite banhos quentes 🚿🔥</Text>
        <Text style={styles.tipText}>
          Água quente remove a barreira natural de proteção da pele, deixando-a ainda mais ressecada. Prefira banhos mornos e rápidos.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>4. Beba bastante água 💦</Text>
        <Text style={styles.tipText}>
          A hidratação começa de dentro para fora! Consuma pelo menos 2 litros de água por dia para manter a pele nutrida.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>5. Use protetor solar todos os dias ☀️🛡️</Text>
        <Text style={styles.tipText}>
          Mesmo em dias nublados, o sol pode prejudicar a pele seca. Escolha um protetor solar com ação hidratante para proteção extra.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>6. Aposte em óleos naturais 🥑🌿</Text>
        <Text style={styles.tipText}>
          Óleos como o de coco, amêndoas e rosa mosqueta ajudam a restaurar a barreira da pele e mantê-la macia.
        </Text>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>7. Invista em máscaras hidratantes 🧖‍♀️</Text>
        <Text style={styles.tipText}>
          Uma ou duas vezes por semana, use máscaras ricas em ingredientes nutritivos para um boost de hidratação.
        </Text>
      </View>

      {/* Conclusão */}
      <View style={styles.conclusionContainer}>
        <Text style={styles.conclusionTitle}>💙 Conclusão</Text>
        <Text style={styles.conclusionText}>
          Com esses cuidados simples, sua pele seca ficará muito mais saudável e radiante! Cuide-se e escolha sempre produtos adequados para o seu tipo de pele.
        </Text>
        <Text style={styles.shareText}>
          Gostou das dicas? Compartilhe com alguém que também precisa saber disso! 😉✨
        </Text>
      </View>

      {/* Botão de compartilhar */}
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Compartilhar este artigo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  headerImage: {
    width: '100%',
    height: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F05080',
    margin: 20,
    textAlign: 'center',
  },
  introText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginHorizontal: 20,
    marginBottom: 25,
  },
  tipContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F05080',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  conclusionContainer: {
    backgroundColor: '#F8E8EE',
    borderRadius: 12,
    padding: 20,
    margin: 20,
  },
  conclusionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F05080',
    marginBottom: 10,
  },
  conclusionText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 10,
  },
  shareText: {
    fontSize: 15,
    color: '#F05080',
    fontStyle: 'italic',
  },
  shareButton: {
    backgroundColor: '#F05080',
    borderRadius: 8,
    padding: 16,
    margin: 20,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default BlogScreen;