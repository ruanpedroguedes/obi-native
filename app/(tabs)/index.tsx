import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { OBIText } from '@/components/OBIText';

export default function WeekScreen() {
  return (
    <View style={styles.container}>
      <OBIText fontSize={15}>Olá Pedro,</OBIText>
        <OBIText fontSize={18}>Pronto para estudar? <OBIText fontSize={18} type="spanText">Dê uma olhada na sua semana!</OBIText>
        </OBIText>
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
