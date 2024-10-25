import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import LoginTextInput from '@/components/LoginTextInput';

const LoginScreen = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null; // ou qualquer componente de carregamento
  }

  const navigateToTabs = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={{ backgroundColor: '#0B0B15', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#FFFFFF', marginBottom: 16, fontFamily: 'Poppins_600SemiBold', fontSize: 30, lineHeight: 45}}>Entrar</Text>
      
      <Text style={{ color: '#FFFFFF', alignSelf: 'flex-start', paddingHorizontal: 33, fontFamily: 'Poppins_400Regular', fontSize: 15, lineHeight: 22.5 }}>
        Nome do usuário ou e-mail
      </Text>
      <LoginTextInput value={name} onChangeText={setName} placeholder="Insira seu nome de usuário ou e-mail" />
      
      <Text style={{ color: '#FFFFFF', alignSelf: 'flex-start', marginTop: 13, paddingHorizontal: 33, fontFamily: 'Poppins_400Regular', fontSize: 15, lineHeight: 22.5 }}>
        Senha
      </Text>
      <LoginTextInput value={password} onChangeText={setPassword} placeholder="Digite sua senha" secureTextEntry={true} />
      
      <Button title="Ir para Tabs" onPress={navigateToTabs} />
    </View>
  );
};

export default LoginScreen;