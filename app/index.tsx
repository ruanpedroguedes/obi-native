import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import LoginTextInput from '@/components/LoginTextInput';
import LoginText from '@/components/LoginText';
import LoginLogo from '@/components/LoginLogo';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleLogin = async () => {
    if (!name || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.0.101:5000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usernameOrEmail: name, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        await AsyncStorage.setItem('userId', data.user.id);
        router.push('/(tabs)');
      } else {
        alert(data.message || 'Erro ao fazer login.');
      }
    } catch (error) {
      alert('Erro ao conectar ao servidor.');
    }
  };

  return (
    <View style={styles.container}>

      <LoginLogo></LoginLogo>
      
      <Text style={styles.title}>Entrar</Text>
      
      <LoginText>Nome do usuário ou e-mail</LoginText>
      <LoginTextInput value={name} onChangeText={setName} placeholder="Insira seu nome de usuário ou e-mail" />
      
      <LoginText style={{ marginTop: 13 }}>Senha</LoginText>
      <LoginTextInput value={password} onChangeText={setPassword} placeholder="Digite sua senha" secureTextEntry={true} />
      
      <LoginText style={styles.forgotPassword}>Esqueceu sua senha?</LoginText>

      <TouchableOpacity style={styles.button} onPress={handleLogin}      >
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
