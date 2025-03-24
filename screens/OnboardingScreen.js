import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Lấy kích thước màn hình để tối ưu hiển thị
const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ẩn hoặc làm trong suốt thanh trạng thái */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content" // Chữ trên thanh trạng thái màu trắng để nổi trên hình ảnh
      />
      {/* Hình ảnh nền full màn hình */}
      <Image
        source={require('../assets/onboarding-image.png')} // Đường dẫn đến hình minh họa
        style={styles.image}
      />
      {/* Nội dung chồng lên hình ảnh */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Nền trắng để đảm bảo sáng
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover', // Phủ kín màn hình
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: StatusBar.currentHeight || 0, // Đảm bảo nội dung không bị che bởi tai thỏ
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;