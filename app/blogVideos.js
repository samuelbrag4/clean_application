import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const videoData = new Array(6).fill({
  title: 'Como cuidar da pele seca?',
  description:
    'A pele seca pode causar desconforto, ressecamento e até descamação, principalmente em climas frios ou ambientes...',
 // substitua pela imagem correta
});

const BlogVideo = () => {
  return (
    <View style={styles.grid}>
      {videoData.map((video, index) => (
        <View key={index} style={styles.card}>
          <Image source={{
            uri: "https://s3-alpha-sig.figma.com/img/998c/7be4/60758edd0b63e7ea31c04959e1e506a3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ElF3MysSumB7MQx651iup5D7N~g3y3W14pY7zvNRrQ0I0mC0Ref1B5NhPSdUXUxDRI1orzjF~v4YRrHxBvMe99ZosCtd96TvkyddEHGKWjtEa4vrGzU8PpL3KiJ0-Zv2apKU-h~vfg6PbIEPxLKINb2S-U4XYQRkhXBsRozO98VMRqlOhdMuLdLL-Wej4W8GyAxKmsSNhPpYRCEf1hhDe-abGK4QrV9~SF5T6ZTvr07uKHFyR4LRHLr4dyfd4r3p4EktdeaeAGE3XR47zRWmuw2rsRRtQ0ZXkzp~A9x-3KyiXgK1WOg6towXteuLwG1OuNqJPPxUNAtsvAHrqj7cGQ__",
          }} style={styles.cardImage} />
          <Text style={styles.label}>Cuidados</Text>
          <Text style={styles.cardTitle}>{video.title}</Text>
          <Text style={styles.cardDesc}>{video.description}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 10,
    elevation: 3,
    
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  label: {
    fontSize: 10,
    color: '#888',
    marginTop: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#555',
    marginTop: 4,
  },
  button: {
    marginTop: 8,
    borderColor: '#00D6C0',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#00D6C0',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default BlogVideo;
