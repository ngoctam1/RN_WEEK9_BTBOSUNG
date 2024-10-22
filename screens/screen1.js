import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const BikeDetailScreen = () => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };
    const navigateToScreen1 = () => {
    navigation.navigate('Screen2'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('./xedap1.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.shopName}>POWER BIKE SHOP</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToScreen1}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'sans-serif',
  },
  imageContainer: {
    width: 300,
    height: 250,
    paddingVertical: 30,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFE6E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '60%',
    height: '90%',
  },
  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#FF3D3D',
    paddingVertical: 15,
    paddingHorizontal: 90,
    marginTop: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BikeDetailScreen;
