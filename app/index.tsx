import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const router = useRouter();

  const navigateToTabs = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à Tela de Login!</Text>
      <Button title="Ir para Tabs" onPress={navigateToTabs} />
    </View>
  );
};

export default LoginScreen;