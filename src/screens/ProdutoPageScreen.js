import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProdutoPageScreen = () => {
  // Dados simulados
  const depoimentos = [
    { id: '1', nome: 'Ana Silva', texto: 'Adorei o produto! Minha pele nunca ficou tão hidratada.', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: '2', nome: 'Carlos Souza', texto: 'Resultados visíveis já na primeira semana de uso.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  ];

  const produtosSimilares = [
    { id: '1', nome: 'Hidratante Noturno', preco: 'R$ 89,90', imagem: 'https://via.placeholder.com/150' },
    { id: '2', nome: 'Óleo Corporal', preco: 'R$ 59,90', imagem: 'https://via.placeholder.com/150' },
    { id: '3', nome: 'Máscara Facial', preco: 'R$ 79,90', imagem: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={styles.container}>
      <Header themeColor="#F05080" activePage="Produto" />
      
      <ScrollView>
        {/* Seção 1 - Foto grande com título e descrição */}
        <View style={styles.section}>
          <Image 
            source={{ uri: 'https://via.placeholder.com/400x300' }}
            style={styles.largeImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hidratante Facial Intenso</Text>
            <Text style={styles.description}>
              Proporciona hidratação profunda por até 24 horas, ideal para peles secas e sensíveis.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ler mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção 2 - Invertida */}
        <View style={[styles.section, styles.sectionInverted]}>
          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Benefícios Exclusivos</Text>
            <Text style={styles.sectionSubtitle}>Para uma pele radiante</Text>
            <Text style={styles.benefit}>✔️ Reduz a sensação de repuxamento</Text>
            <Text style={styles.benefit}>✔️ Restaura a barreira natural da pele</Text>
            <Text style={styles.benefit}>✔️ Contém ácido hialurônico</Text>
            <Text style={styles.benefit}>✔️ Livre de parabenos</Text>
          </View>
          <Image 
            source={{ uri: 'https://via.placeholder.com/400x300' }}
            style={styles.largeImage}
          />
        </View>

        {/* Depoimentos */}
        <Text style={styles.sectionTitle}>Depoimentos</Text>
        <FlatList
          horizontal
          data={depoimentos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.depoimentoCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.depoimentoNome}>{item.nome}</Text>
              <Text style={styles.depoimentoTexto}>{item.texto}</Text>
            </View>
          )}
          contentContainerStyle={styles.depoimentosContainer}
        />

        {/* Produtos similares */}
        <Text style={styles.sectionTitle}>Produtos Semelhantes</Text>
        <View style={styles.produtosContainer}>
          {produtosSimilares.map(produto => (
            <View key={produto.id} style={styles.produtoCard}>
              <Image source={{ uri: produto.imagem }} style={styles.produtoImage} />
              <Text style={styles.produtoNome}>{produto.nome}</Text>
              <Text style={styles.produtoPreco}>{produto.preco}</Text>
              <TouchableOpacity style={styles.smallButton}>
                <Text style={styles.smallButtonText}>Veja agora</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <Footer themeColor="#F05080" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  section: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  sectionInverted: {
    flexDirection: 'row-reverse',
  },
  largeImage: {
    width: '50%',
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    width: '50%',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F05080',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#F05080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F05080',
    margin: 20,
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  benefit: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  depoimentosContainer: {
    paddingHorizontal: 20,
  },
  depoimentoCard: {
    width: 200,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  depoimentoNome: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  depoimentoTexto: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
  produtosContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  produtoCard: {
    width: 120,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  produtoImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  produtoNome: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  produtoPreco: {
    fontSize: 12,
    color: '#F05080',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  smallButton: {
    backgroundColor: '#F05080',
    padding: 6,
    borderRadius: 4,
  },
  smallButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProdutoPageScreen;