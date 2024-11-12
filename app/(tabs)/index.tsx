import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import OBIText from '@/components/OBIText';
import DisciplineCard from '@/components/DisciplineCard';

export default function WeekScreen() {
  return (
    <View style={styles.container}>
      <OBIText weight="400" style={{ fontSize: 15 }}>Olá User,</OBIText>
        <OBIText weight="400" style={{ fontSize: 18 }}>Pronto para estudar? <OBIText weight="500" style={{ fontSize: 18, color: "#103ADA" }}>Dê uma olhada na sua semana!</OBIText>
        </OBIText>

        <DisciplineCard></DisciplineCard>
        <DisciplineCard></DisciplineCard>
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
