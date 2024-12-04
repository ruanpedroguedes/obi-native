import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Linking, TouchableOpacity, ScrollView } from 'react-native';
import OBIText from '@/components/OBIText';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [userName, setUserName] = useState<string>('Nome do Usuário');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
  
        if (!userId) {
          console.error('Usuário não encontrado no armazenamento local.');
          return;
        }
  
        const response = await fetch(`http://192.168.0.101:5000/user/${userId}`);
        const data = await response.json();
  
        if (data.user && data.user.nome) {
          const firstName = data.user.nome.split(' ')[0]; 
          setUserName(firstName);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };
  
    fetchUserData();
  }, []);

  const handleOpenPDF = () => {
    Linking.openURL('https://link-do-pdf-aqui.pdf'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <OBIText weight="600" style={styles.title}>Perfil de {userName}</OBIText>

        <View style={styles.infoContainer}>
          <OBIText weight="400" style={styles.infoLabel}>Email:</OBIText>
          <OBIText weight="400" style={styles.infoValue}>senacmediotec@gmail.com</OBIText>
        </View>

        <View style={styles.infoContainer}>
          <OBIText weight="400" style={styles.infoLabel}>Telefone:</OBIText>
          <OBIText weight="400" style={styles.infoValue}>81977885544</OBIText>
        </View>

        <View style={styles.infoContainer}>
          <OBIText weight="400" style={styles.infoLabel}>Link para o Financeiro:</OBIText>
          <TouchableOpacity onPress={() => Linking.openURL('https://atendimento.ms.senac.br/support/solutions/articles/70000582814-como-gerar-um-boleto-bancário-')}>
            <OBIText weight="400" style={styles.link}>Clique aqui para acessar</OBIText>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <OBIText weight="400" style={styles.infoLabel}>Endereço:</OBIText>
          <OBIText weight="400" style={styles.infoValue}>Av. João de Barros, 523 - Soledade, Recife - PE, 50050-180, Brasil</OBIText>
        </View>

        <View style={styles.infoContainer}>
          <OBIText weight="400" style={styles.infoLabel}>Horário:</OBIText>
          <TouchableOpacity onPress={handleOpenPDF}>
            <OBIText weight="400" style={styles.link}>Clique aqui para visualizar o horário</OBIText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F8FF',
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888888',
  },
  infoValue: {
    fontSize: 16,
    color: '#333333',
  },
  link: {
    fontSize: 14,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});
