import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/Header";
import { Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ProdutosScreen = () => {
  // Dados dos produtos
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Creme Hidratante Facial',
      brand: 'Nivea',
      price: 39.90,
      rating: 4.7,
      image: 'https://images.tcdn.com.br/img/img_prod/926373/creme_hidratante_facial_lata_nivea_56g_33_4_fda70b6f889ac923fda5246eeec97507_20220825113147.jpeg',
      category: 'skincare'
    },

    {
      id: '2',
      name: 'Loção Corporal',
      brand: 'Natura',
      price: 45.90,
      rating: 4.5,
      image: 'https://farmadelivery.fbitsstatic.net/img/p/hidratante-corporal-natura-tododia-ameixa-e-flor-de-cerejeira-400ml-208915/395467.jpg?w=596&h=596&v=no-value',
      category: 'body'
    },
    {
      id: '3',
      name: 'Batom Matte Vermelho',
      brand: 'Ruby Rose',
      price: 49.90,
      rating: 4.8,
      image: 'https://tfczxi.vtexassets.com/arquivos/ids/179536/batom-liquido-matte-melu-by-rubyrose-cor-red-velvet-cm06-01.jpg?v=638169260293400000',
      category: 'makeup'
    },
    {
      id: '4',
      name: 'Protetor Solar FPS 50',
      brand: 'La Roche-Posay',
      price: 89.90,
      rating: 4.8,
      image: 'https://product-data.raiadrogasil.io/images/3467041.webp',
      category: 'skincare'
    },
    {
      id: '5',
      name: 'Sabonete Líquido Corporal',
      brand: 'Dove',
      price: 22.90,
      rating: 4.6,
      image: 'https://drogal.vtexassets.com/arquivos/ids/249421/130570.jpg?v=638763419134230000',
      category: 'body'
    },
    {
      id: '6',
      name: 'Paleta de Sombras',
      brand: 'Vult',
      price: 59.90,
      rating: 4.7,
      image: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/523106-800-800/paleta-de-sombras-vult-essentials-rose--2-.jpg?v=638054266813530000',
      category: 'makeup'
    },

    {
      id: '7',
      name: 'Base Líquida Skin',
      brand: 'Bruna Tavares',
      price: 89.90,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/31dFE5nhetS._SS200_.jpg',
      category: 'makeup'
    },

    {
      id: '7',
      name: 'Hidratante Facial - Pele mista e Oleosa',
      brand: 'Natura',
      price: 89.90,
      rating: 4.8,
      image: 'https://production.na01.natura.com/on/demandware.static/-/Sites-natura-br-storefront-catalog/default/dwefd00299/NATBRA-91821_2.jpg',
      category: 'skincare'
    },

    {
      id: '7',
      name: 'Esfoliante Corporal Pitaya',
      brand: 'Labotrat',
      price: 89.90,
      rating: 4.8,
      image: 'https://m.media-amazon.com/images/I/61OT3D332nL._AC_SX679_.jpg',
      category: 'body'
    },

    {
      id: '7',
      name: 'Máscara de Cílios',
      brand: 'O Boticário',
      price: 89.90,
      rating: 4.8,
      image: 'https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B50756/50756_MAKE-B_MASCARA-DE-CILIOS_CILIOS-POSTICOS_FRONTAL_1.jpg',
      category: 'makeup'
    },



  ]);

  // Estados para filtros
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const flatListRef = React.useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sortOption, setSortOption] = useState(null);



  // Categorias disponíveis (apenas as solicitadas)
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'skincare', name: 'Skincare' },
    { id: 'body', name: 'Corpo' },
    { id: 'makeup', name: 'Maquiagem' },
  ];

  // Função para filtrar produtos
  const filteredProducts = [...products]
  .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
  .sort((a, b) => {
    if (sortOption === 'lowPrice') return a.price - b.price;
    if (sortOption === 'highPrice') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0;
  });

  

  // Renderizar cada item do produto
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.brandText}>{item.brand}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>R$ {item.price.toFixed(2)}</Text>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header themeColor="#F05080" activePage="Produtos" />

      {/* Filtros por categoria */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoryContainer}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && styles.selectedCategoryButton
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category.id && styles.selectedCategoryText
            ]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>




<Text style={styles.modalTitle}>Ordenar por</Text>

<TouchableOpacity onPress={() => setSortOption('lowPrice')} style={styles.sortOption}>
  <Text style={styles.sortText}>Preço: menor para maior</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setSortOption('highPrice')} style={styles.sortOption}>
  <Text style={styles.sortText}>Preço: maior para menor</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setSortOption('rating')} style={styles.sortOption}>
  <Text style={styles.sortText}>Melhor avaliados</Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() => {
    setShowFilterModal(false);
  }}
  style={styles.closeModal}
>
  <Text style={{ color: '#fff' }}>Aplicar</Text>
</TouchableOpacity>



      {/* Lista de produtos */}
      <FlatList
  ref={flatListRef}
  onScroll={(e) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    setShowScrollTop(offsetY > 100);
  }}
  scrollEventThrottle={16}
  data={filteredProducts}
  renderItem={renderProductItem}
  keyExtractor={(item, index) => item.id + index}
  numColumns={2}
  contentContainerStyle={styles.productsList}
  columnWrapperStyle={styles.productsRow}
/>


{showScrollTop && (
  <TouchableOpacity
    style={styles.scrollTopButton}
    onPress={() => flatListRef.current.scrollToOffset({ offset: 0, animated: true })}
  >
    <AntDesign name="arrowup" size={24} color="#fff" />
  </TouchableOpacity>
)}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  categoryContainer: {
    paddingVertical: 12,
    paddingLeft: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: '#E0E0E0',
  },
  selectedCategoryButton: {
    backgroundColor: '#F05080',
  },
  categoryText: {
    color: '#555',
    fontSize: 14,

    
   
  },
  selectedCategoryText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  productsList: {
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 16,
  },
  productsRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    backgroundColor: '#FAFAFA',
  },
  productInfo: {
    padding: 12,
  },
  brandText: {
    fontSize: 12,
    color: '#F05080',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  nameText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 6,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F05080',
  },
  ratingText: {
    fontSize: 12,
    color: '#777',
  },
scrollTopButton: {
  position: 'absolute',
  bottom: 20,
  right: 20,
  backgroundColor: '#F05080',
  borderRadius: 30,
  padding: 12,
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  zIndex: 999,
},
filterButton: {
  alignSelf: 'flex-end',
  marginRight: 16,
  marginBottom: 10,
  backgroundColor: '#F05080',
  paddingVertical: 6,
  paddingHorizontal: 16,
  borderRadius: 20,
},
filterButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContainer: {
  width: '80%',
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 20,
  alignItems: 'center',
},


modalTitle: {
  backgroundColor: '#F05080',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  marginTop: 20,
  
},

sortOption: {
  paddingVertical: 10,
  width: '100%',
  borderBottomWidth: 1,
  borderBottomColor: '#EEE',
},
sortText: {
  fontSize: 16,
  color: '#333',
  textAlign: 'center',
},


});



export default ProdutosScreen;