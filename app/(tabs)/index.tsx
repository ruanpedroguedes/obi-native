import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import OBIText from '@/components/OBIText';
import DisciplineCard from '@/components/DisciplineCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Discipline {
  _id: string;
  name: string;
}

export default function WeekScreen() {
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [userName, setUserName] = useState<string>('StudentName');

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

        if (data.disciplines) {
          setDisciplines(data.disciplines);
        }
        if (data.name) {
          const firstName = data.name.split(' ')[0];
          setUserName(firstName);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <OBIText weight="400" style={{ fontSize: 15 }}>
        Olá {userName},
      </OBIText>
      <OBIText weight="400" style={{ fontSize: 18 }}>
        Pronto para estudar?{' '}
        <OBIText weight="500" style={{ fontSize: 18, color: '#103ADA' }}>
          Dê uma olhada na sua semana!
        </OBIText>
      </OBIText>

      <FlatList
        data={disciplines}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <DisciplineCard name={item.name} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#F5F8FF',
  },
});
