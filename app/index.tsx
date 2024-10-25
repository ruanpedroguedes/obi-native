import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import LoginTextInput from '@/components/LoginTextInput';
import LoginText from '@/components/LoginText';

const LoginScreen = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigateToTabs = () => {
    router.push('/(tabs)');
  };

  return (
    <View style={{ backgroundColor: '#0B0B15', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#FFFFFF', marginBottom: 16, fontFamily: 'Poppins_600SemiBold', fontSize: 30, lineHeight: 45}}>Entrar</Text>
      
      <LoginText>Nome do usuário ou e-mail</LoginText>
      <LoginTextInput value={name} onChangeText={setName} placeholder="Insira seu nome de usuário ou e-mail" />
      
      <LoginText style={{ marginTop: 15}} >Senha</LoginText>
      <LoginTextInput value={password} onChangeText={setPassword} placeholder="Digite sua senha" secureTextEntry={true} />
      
      <Button title="Ir para Tabs" onPress={navigateToTabs} />
    </View>
  );
};

export default LoginScreen;