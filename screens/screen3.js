import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation
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
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image */}
      <Image source={require('./xedap2.png')} style={styles.image} />

      {/* Bike Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.bikeName}>Pina Mountain</Text>
        <Text style={styles.discount}>15% OFF | <Text style={styles.currentPrice}>1350$</Text></Text>
        <Text style={styles.originalPrice}>449$</Text>

        {/* Description */}
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          It is a very important form of writing as we write almost everything in paragraphs, 
          be it an answer, essay, story, emails, etc.
        </Text>

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          {/* Like Button */}
          <TouchableOpacity onPress={toggleLiked} style={styles.likeButton}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M16.5942 1.90723C14.8096 1.90723 13.2617 2.90332 12.5 4.3584C11.7383 2.90332 10.1904 1.90723 8.40576 1.90723C5.8667 1.90723 3.80859 3.92383 3.80859 6.41162C3.80859 11.3237 12.5 16.8926 12.5 16.8926C12.5 16.8926 21.1914 11.3237 21.1914 6.41162C21.1914 3.92383 19.1333 1.90723 16.5942 1.90723Z"
                fill={liked ? 'red' : 'gray'}
              />
            </Svg>
          </TouchableOpacity>

          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.cartButton} onPress={navigateToScreen1}>
            <Text style={styles.cartButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
  },
  bikeName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  discount: {
    fontSize: 16,
    color: '#E74C3C',
    marginBottom: 5,
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    color: '#A9A9A9',
    textDecorationLine: 'line-through',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likeButton: {
    padding: 10,
  },
  cartButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BikeDetailScreen;
