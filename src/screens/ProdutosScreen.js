import React from "react";
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProdutosScreen = () => {
  // Dados simulados
  const featuredProduct = {
    id: '1',
    title: 'Hidratante Facial Premium',
    description: 'Hidratação intensiva 24h com ácido hialurônico e vitamina E',
    image: 'https://product-data.raiadrogasil.io/images/3833937.webp',
    details: 'Formulado para peles extremamente secas, proporciona conforto imediato'
  };

  const benefits = [
    { id: '1', title: 'Hidratação Profunda', description: 'Penetra nas camadas mais profundas da epiderme' },
    { id: '2', title: 'Proteção Duradura', description: 'Cria barreira protetora contra agressores externos' },
    { id: '3', title: 'Textura Leve', description: 'Absorção rápida sem deixar residuo oleoso' },
    { id: '4', title: 'Cheiro Suave', description: 'Fragrância delicada que não irrita a pele' }
  ];

  const testimonials = [
    { id: '1', name: 'Ana Clara', text: 'Minha pele nunca esteve tão hidratada!', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
    { id: '2', name: 'Carlos Eduardo', text: 'Resultados visíveis desde a primeira aplicação', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
    { id: '3', name: 'Mariana Souza', text: 'O único que realmente hidrata minha pele seca', avatar: 'https://randomuser.me/api/portraits/women/68.jpg' }
  ];

  const similarProducts = [
    { id: '1', name: 'Óleo Corporal', price: 'R$ 89,90', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Máscara Noturna', price: 'R$ 79,90', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Sabonete Cremoso', price: 'R$ 49,90', image: 'https://via.placeholder.com/150' }
  ];

  return (
    <View style={styles.container}>
      <Header themeColor="#F05080" activePage="Produtos" />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Seção 1: Foto grande com título e descrição */}
        <View style={styles.section}>
          <Image 
            source={{ uri: featuredProduct.image }} 
            style={styles.largeImage} 
          />
          <View style={styles.textContent}>
            <Text style={styles.productTitle}>{featuredProduct.title}</Text>
            <Text style={styles.productDescription}>{featuredProduct.description}</Text>
            <Text style={styles.productDetails}>{featuredProduct.details}</Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.buttonText}>LER MAIS</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção 2: Invertida com benefícios */}
        <View style={[styles.section, styles.invertedSection]}>
          <View style={styles.textContent}>
            <Text style={styles.sectionTitle}>BENEFÍCIOS EXCLUSIVOS</Text>
            <Text style={styles.sectionSubtitle}>Por que escolher nossos produtos</Text>
            
            {benefits.map(benefit => (
              <View key={benefit.id} style={styles.benefitItem}>
                <Text style={styles.benefitTitle}>• {benefit.title}</Text>
                <Text style={styles.benefitText}>{benefit.description}</Text>
              </View>
            ))}
          </View>
          <Image 
            source={{ uri: 'https://essentialnutrition-upload-files.s3.amazonaws.com/site-noorskin/produtos/natural-light/img01-natural-light-mobile.jpg' }} 
            style={styles.largeImage} 
          />
        </View>

        {/* Seção 3: Depoimentos */}
        <Text style={styles.sectionHeader}>DEPOIMENTOS</Text>
        <FlatList
          horizontal
          data={testimonials}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.testimonialCard}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <Text style={styles.testimonialName}>{item.name}</Text>
              <Text style={styles.testimonialText}>"{item.text}"</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.testimonialsContainer}
        />

        {/* Seção 4: Produtos similares */}
        <Text style={styles.sectionHeader}>PRODUTOS SEMELHANTES</Text>
        <View style={styles.productsRow}>
          {similarProducts.map(product => (
            <View key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
              <TouchableOpacity style={styles.smallButton}>
                <Text style={styles.smallButtonText}>VEJA AGORA</Text>
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
  scrollContainer: {
    paddingBottom: 20,
  },
  section: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  invertedSection: {
    flexDirection: 'row-reverse',
  },
  largeImage: {
    width: '30%',
    height: 450,
  },
  textContent: {
    width: '50%',
    padding: 15,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F05080',
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  productDetails: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  readMoreButton: {
    backgroundColor: '#F05080',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F05080',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
    fontWeight: '600',
  },
  benefitItem: {
    marginBottom: 12,
  },
  benefitTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  benefitText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F05080',
    marginHorizontal: 15,
    marginTop: 25,
    marginBottom: 15,
  },
  testimonialsContainer: {
    paddingHorizontal: 15,
  },
  testimonialCard: {
    width: 180,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  testimonialName: {
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  productsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  productCard: {
    width: '30%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 8,
  },
  productName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    color: '#F05080',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  smallButton: {
    backgroundColor: '#F05080',
    padding: 6,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
  },
  smallButtonText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProdutosScreen;