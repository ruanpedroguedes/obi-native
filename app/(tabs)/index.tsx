import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import OBIText from '@/components/OBIText';
import DisciplineCard from '@/components/DisciplineCard';

interface Discipline {
  _id: string;
  name: string;
  class_id: string;
}

export default function WeekScreen() {
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  useEffect(() => {
    fetch('http://192.168.0.101:5000/user/673cbdf8da377ba7ba74a42a')
      .then((response) => response.json())
      .then((data) => {
        if (data.disciplines) {
          setDisciplines(data.disciplines);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <OBIText weight="400" style={{ fontSize: 15 }}>Olá User,</OBIText>
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
          <DisciplineCard name={item.name} classId={item.class_id} />
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
