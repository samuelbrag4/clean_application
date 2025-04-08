import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Footer from '../components/Footer';
import BlogVideo from '../../app/blogVideos';
import Header from '../components/Header';

const BlogVideoScreen = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scroll}>

        <Image
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/998c/7be4/60758edd0b63e7ea31c04959e1e506a3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ElF3MysSumB7MQx651iup5D7N~g3y3W14pY7zvNRrQ0I0mC0Ref1B5NhPSdUXUxDRI1orzjF~v4YRrHxBvMe99ZosCtd96TvkyddEHGKWjtEa4vrGzU8PpL3KiJ0-Zv2apKU-h~vfg6PbIEPxLKINb2S-U4XYQRkhXBsRozO98VMRqlOhdMuLdLL-Wej4W8GyAxKmsSNhPpYRCEf1hhDe-abGK4QrV9~SF5T6ZTvr07uKHFyR4LRHLr4dyfd4r3p4EktdeaeAGE3XR47zRWmuw2rsRRtQ0ZXkzp~A9x-3KyiXgK1WOg6towXteuLwG1OuNqJPPxUNAtsvAHrqj7cGQ__",
          }}
          style={styles.banner}
          resizeMode="cover"
        />

      
        <Text style={styles.title}>Vídeos que você pode precisar!</Text>

        
        <BlogVideo />
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
    
  },
  banner: {
    width: '80%',
    height: '1200px',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#3A1E1E',
    fontFamily: 'Pacifico',
  },
});

export default BlogVideoScreen;
