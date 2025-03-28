import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Import ảnh từ thư mục assets
import profileImage from '../assets/profile.png';

// Lấy chiều rộng màn hình
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={['rgba(230, 230, 230, 0)', '#FEFFBF']}
        style={styles.headerGradient}
      >
        <Text style={styles.header}>Profile</Text>
      </LinearGradient>

      {/* Ảnh profile, tên, email */}
      <View style={styles.profileInfo}>
        <Image
          source={profileImage}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nguyễn Huy Hoàng</Text>
        <Text style={styles.email}>bernard25102003@gmail.com</Text>
      </View>

      {/* Danh sách các mục */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home-outline" size={24} color="#000" style={styles.menuIcon} />
          <Text style={styles.menuText}>Home</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="card-outline" size={24} color="#000" style={styles.menuIcon} />
          <Text style={styles.menuText}>My Card</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="moon-outline" size={24} color="#000" style={styles.menuIcon} />
          <Text style={styles.menuText}>Dark Mood</Text>
          <View style={styles.toggle}>
            <View style={styles.toggleCircle} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="location-outline" size={24} color="#000" style={styles.menuIcon} />
          <Text style={styles.menuText}>Truck Your Order</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#000" style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#000" style={styles.menuIcon} />
          <Text style={styles.menuText}>Help Center</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#fff" style={styles.menuIcon} />
          <Text style={styles.logoutText}>Log Out</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 0 
  },
  headerGradient: {
    width: SCREEN_WIDTH,
    height: 179,
    top: -8,
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 40,
    textAlign: 'center',
    color: '#000',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 100, // Đẩy xuống để không bị đè lên gradient
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginBottom: 10,
  },
  name: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  email: { 
    fontSize: 14, 
    color: 'gray',
    marginTop: 5,
  },
  menu: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
  },
  toggle: {
    width: 40,
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleCircle: {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A43EC', // Màu xanh dương giống trong hình
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutText: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
