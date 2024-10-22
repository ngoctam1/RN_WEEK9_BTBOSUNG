import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; // Import navigation

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BikeListScreen = () => {
  const navigation = useNavigation(); 
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bikes, setBikes] = useState([
    { id: '1', name: 'Pinarello', price: 1800, image: require('./xedap1.png'), liked: false },
    { id: '2', name: 'Pina Mountain', price: 1700, image: require('./xedap2.png'), liked: false },
    { id: '3', name: 'Pina Bike', price: 1500, image: require('./xedap3.png'), liked: false },
    { id: '4', name: 'Pinarello', price: 1900, image: require('./xedap4.png'), liked: false },
    { id: '5', name: 'Pinarello', price: 2700, image: require('./xedap3.png'), liked: false },
    { id: '6', name: 'Pinarello', price: 1350, image: require('./xedap2.png'), liked: false },
  ]);

  const navigateToScreen2 = () => {
    navigation.navigate('Screen3'); 
  };
  const toggleLiked = (id) => {
    setBikes(bikes.map(bike => (bike.id === id ? { ...bike, liked: !bike.liked } : bike)));
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={navigateToScreen2}>  {/* Thêm sự kiện bấm vào */}
        <TouchableOpacity onPress={() => toggleLiked(item.id)}>
          <Svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M13.5942 0.907227C11.8096 0.907227 10.2617 1.90332 9.5 3.3584C8.73828 1.90332 7.19043 0.907227 5.40576 0.907227C2.8667 0.907227 0.808594 2.92383 0.808594 5.41162C0.808594 10.3237 9.5 15.8926 9.5 15.8926C9.5 15.8926 18.1914 10.3237 18.1914 5.41162C18.1914 2.92383 16.1333 0.907227 13.5942 0.907227Z"
              fill={item.liked ? 'red' : 'gray'}
            />
          </Svg>
        </TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={styles.title}>The world's Best Bike</Text>
            <View style={styles.filterContainer}>
        {['All', 'Roadbike', 'Mountain'].map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.selectedFilterButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === category && styles.selectedFilterText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={bikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two-column grid layout
        columnWrapperStyle={styles.grid}
        contentContainerStyle={styles.flatListContent}
        style={{ height: SCREEN_HEIGHT * 0.7 }}
      />
    </View>


    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    marginHorizontal: 5,
  },
  selectedFilterButton: {
    backgroundColor: '#E74C3C',
    borderColor: '#E74C3C',
  },
  filterText: {
    color: '#000',
  },
  selectedFilterText: {
    color: '#FFF',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  grid: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fcf1de',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DADADA',
    width: '47%',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center',
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
    textAlign:'center',
  },
});

export default BikeListScreen;

