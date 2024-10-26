import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      
      <LoginText>Nome do usuário ou e-mail</LoginText>
      <LoginTextInput value={name} onChangeText={setName} placeholder="Insira seu nome de usuário ou e-mail" />
      
      <LoginText style={{ marginTop: 13 }}>Senha</LoginText>
      <LoginTextInput value={password} onChangeText={setPassword} placeholder="Digite sua senha" secureTextEntry={true} />
      
      <LoginText style={styles.forgotPassword}>Esqueceu sua senha?</LoginText>

      <TouchableOpacity style={styles.button} onPress={navigateToTabs}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B0B15',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    marginBottom: 16,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 30,
    lineHeight: 45,
  },
  forgotPassword: {
    marginTop: 5,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
  button: {
    width: '60%',
    backgroundColor: '#103ADA',
    borderRadius: 99,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
  },
});

export default LoginScreen;
