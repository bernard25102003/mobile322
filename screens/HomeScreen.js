import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Import ảnh từ thư mục assets
import profileImage from '../assets/profile.png';
import burgerImage from '../assets/burger.png';
import pizzaImage from '../assets/pizza.png';

// Import icon cho danh mục
import pizzaIcon from '../assets/pizza-icon.png';
import burgerIcon from '../assets/burger-icon.png';
import drinkIcon from '../assets/drink-icon.png';
import riciIcon from '../assets/rici-icon.png';

// Lấy chiều rộng màn hình
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <LinearGradient
          colors={['rgba(230, 230, 230, 0)', '#FEFFBF']}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            {/* Ảnh profile */}
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={profileImage}
                style={styles.avatar}
              />
            </TouchableOpacity>

            {/* Your Location */}
            <View style={styles.locationContainer}>
              <Text style={styles.location}>Your Location</Text>
              <Text style={styles.locationDetail}>Savar, Dhaka</Text>
            </View>

            {/* Icon thông báo */}
            <TouchableOpacity style={styles.notificationIcon}>
              <Ionicons name="notifications-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Search Bar */}
        <TouchableOpacity style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#fff" style={styles.searchIcon} />
          <Text style={styles.searchText}>Search your food</Text>
        </TouchableOpacity>

        {/* Categories */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={pizzaIcon} style={styles.categoryIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={burgerIcon} style={styles.categoryIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={drinkIcon} style={styles.categoryIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={riciIcon} style={styles.categoryIcon} />
          </TouchableOpacity>
        </ScrollView>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerText}>BURGER</Text>
            <Text style={styles.bannerSubText}>Today's Hot Offer</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text style={styles.ratingText}>4.9 (3K+ Rating)</Text>
            </View>
          </View>
          <View style={styles.discountContainer}>
            <Text style={styles.discount}>10% OFF</Text>
          </View>
          <Image source={burgerImage} style={styles.bannerImage} />
        </View>

        {/* Pagination Dots */}
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Popular Items */}
        <View style={styles.popularItems}>
          <View style={styles.popularHeader}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <View style={styles.itemContainer}>
              <Image source={burgerImage} style={styles.itemImage} />
              <Text style={styles.itemLabel}>BURGER</Text>
            </View>
            <View style={styles.itemContainer}>
              <Image source={pizzaImage} style={styles.itemImage} />
              <Text style={styles.itemLabel}>PIZZA</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
    paddingHorizontal: 0,
  },
  header: {
    width: SCREEN_WIDTH,
    height: 179,
    top: -8,
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 40,
  },
  avatar: { 
    width: 50, 
    height: 50, 
    borderRadius: 25 
  },
  locationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  location: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  locationDetail: { 
    fontSize: 14, 
    color: 'gray' 
  },
  notificationIcon: {
    width: 50,
    alignItems: 'center',
  },
  searchBar: { 
    position: 'absolute',
    top: 149,
    left: (SCREEN_WIDTH - 327) / 2,
    width: 327,
    height: 60,
    backgroundColor: '#4A43EC',
    borderRadius: 100,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: { 
    marginRight: 10 
  },
  searchText: { 
    color: '#fff', 
    fontSize: 16 
  },
  categories: { 
    position: 'absolute',
    top: 246,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
  },
  categoryItem: { 
    width: 86,
    height: 96,
    borderRadius: 6,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoryIcon: {
    width: 86,
    height: 96,
    resizeMode: 'contain',
  },
  banner: { 
    backgroundColor: '#000', 
    marginHorizontal: 15,
    marginTop: 300, // Reduced from 350 to bring the banner closer to the category icons
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  bannerSubText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 5,
  },
  discountContainer: {
    backgroundColor: '#6200EE',
    borderRadius: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  discount: { 
    color: '#fff', 
    fontSize: 12, 
    fontWeight: 'bold',
  },
  bannerImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 10,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  popularItems: { 
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
    color: '#4A43EC',
  },
  itemRow: { 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  itemImage: { 
    width: (SCREEN_WIDTH - 50) / 2,
    height: 120,
    borderRadius: 10,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});