import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import firebase from 'firebase';

// Inicialize a conexão com o Firebase
const firebaseConfig = {
  // Configurações do nosso projeto Firebase
};

firebase.initializeApp(firebaseConfig);

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [newOrderTitle, setNewOrderTitle] = useState('');

  useEffect(() => {
    // Recupere as ordens de serviço do Firebase
    const ordersRef = firebase.database().ref('orders');
    ordersRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersArray = Object.keys(data).map((orderId) => ({
          id: orderId,
          title: data[orderId].title,
        }));
        setOrders(ordersArray);
      } else {
        setOrders([]);
      }
    });

    return () => {
      ordersRef.off('value');
    };
  }, []);

  const handleAddOrder = () => {
    // Adicione uma nova ordem de serviço ao Firebase
    const ordersRef = firebase.database().ref('orders');
    const newOrder = { title: newOrderTitle };
    ordersRef.push(newOrder);

    setNewOrderTitle('');
  };

  const renderOrderItem = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newOrderTitle}
          onChangeText={setNewOrderTitle}
          placeholder="Digite o título da ordem de serviço"
        />
        <Button title="Adicionar" onPress={handleAddOrder} />
      </View>

      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  orderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default OrderList;
