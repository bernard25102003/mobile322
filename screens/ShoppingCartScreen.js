import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Import ảnh từ thư mục assets
import burgerImage from '../assets/burger.png';

// Lấy chiều rộng màn hình
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ShoppingCartScreen() {
  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const pricePerItem = 28;
  const subtotal = pricePerItem * quantity;
  const deliveryFee = 6.20;
  const payableTotal = subtotal + deliveryFee;

  return (
    <View style={styles.container}>
      {/* Gradient Header với Banner */}
      <LinearGradient
        colors={['rgba(230, 230, 230, 0)', '#FEFFBF']}
        style={styles.headerGradient}
      >
        <Text style={styles.header}>Shopping Cart</Text>

        {/* Banner */}
        <View style={styles.banner}>
          {/* Nhãn 10% OFF */}
          <View style={styles.discountLabel}>
            <Text style={styles.discountText}>10% OFF</Text>
          </View>

          {/* Ảnh lớn */}
          <Image
            source={burgerImage}
            style={styles.bannerImageLarge}
          />

          {/* Ba ảnh nhỏ */}
          <View style={styles.smallImagesContainer}>
            <Image
              source={burgerImage}
              style={styles.bannerImageSmall}
            />
            <Image
              source={burgerImage}
              style={styles.bannerImageSmall}
            />
            <Image
              source={burgerImage}
              style={styles.bannerImageSmall}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Khung chứa thông tin đơn hàng */}
      <ScrollView style={styles.orderContainer}>
        {/* Thông tin sản phẩm */}
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>BURGER</Text>
          <Text style={styles.itemSize}>327 x 214</Text>
          <Text style={styles.price}>${pricePerItem}</Text>
          <Text style={styles.rating}>4.9 (3k+ Rating)</Text>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={styles.quantityBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={styles.quantityBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Địa chỉ giao hàng */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Delivery Address</Text>
          <Text style={styles.infoText}>Dhaka, Bangladesh</Text>
        </View>

        {/* Phương thức thanh toán */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Payment Method</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Tổng tiền */}
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Subtotal ({quantity})</Text>
          <Text style={styles.summaryText}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryText}>${deliveryFee.toFixed(2)}</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>Payable Total</Text>
          <Text style={styles.summaryText}>${payableTotal.toFixed(2)}</Text>
        </View>

        {/* Nút Confirm Order */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Order</Text>
        </TouchableOpacity>
      </ScrollView>
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
    height: 350, // Tăng chiều cao để chứa banner
    top: -8,
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
    padding: 15,
    alignItems: 'center',
  },
  header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 40,
    textAlign: 'center',
    color: '#000',
  },
  banner: {
    marginTop: 20,
    alignItems: 'center',
    position: 'relative',
  },
  discountLabel: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#6200EE',
    borderRadius: 20,
    padding: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bannerImageLarge: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  smallImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  bannerImageSmall: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  orderContainer: {
    position: 'absolute',
    top: 285,
    left: (SCREEN_WIDTH - 327) / 2,
    width: 327,
    height: 508,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  itemDetails: { 
    marginBottom: 15 
  },
  itemName: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  itemSize: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  price: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  rating: { 
    color: 'gray', 
    marginVertical: 5 
  },
  quantity: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10 
  },
  quantityBtn: { 
    fontSize: 20, 
    paddingHorizontal: 10 
  },
  quantityText: { 
    fontSize: 16, 
    marginHorizontal: 10 
  },
  infoSection: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 10 
  },
  infoTitle: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  infoText: { 
    fontSize: 16 
  },
  changeText: { 
    color: '#6200EE' 
  },
  summary: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 8 // Tăng khoảng cách
  },
  summaryText: { 
    fontSize: 18, // Tăng font chữ
    fontWeight: 'bold', // Làm đậm chữ
  },
  confirmButton: { 
    backgroundColor: '#6200EE', 
    padding: 20, // Tăng padding để nút to hơn
    borderRadius: 12, // Tăng bo góc
    marginTop: 25 // Tăng khoảng cách phía trên
  },
  confirmText: { 
    color: '#fff', 
    textAlign: 'center', 
    fontSize: 18, // Tăng font chữ
    fontWeight: 'bold', // Làm đậm chữ
  },
})