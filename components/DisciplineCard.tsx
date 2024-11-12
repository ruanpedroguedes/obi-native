import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OBIText from './OBIText';

const DisciplineCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconPlaceholder} />
        <View style={styles.textContainer}>
          <OBIText weight="400" style={{ fontSize: 20, lineHeight: 30 }}>História</OBIText>
          <OBIText weight="400" style={{ fontSize: 12, lineHeight: 18 }}>Nome do professor</OBIText>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={[styles.button, styles.buttonSpacing]}>
          <OBIText weight="400" style={{ fontSize: 12, lineHeight: 18 }}>Avisos</OBIText>
        </View>
        <View style={[styles.button, styles.buttonSpacing]}>
          <OBIText weight="400" style={{ fontSize: 12, lineHeight: 18 }}>Materiais</OBIText>
        </View>
        <View style={styles.button}>
          <OBIText weight="400" style={{ fontSize: 12, lineHeight: 18 }}>Enquetes</OBIText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconPlaceholder: {
    width: 42,
    height: 42,
    borderRadius: 20,
    backgroundColor: '#CCCCCC',
  },
  textContainer: {
    marginLeft: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#103ADA',
    backgroundColor: '#FFFFFF',
  },
  buttonSpacing: {
    marginRight: 8,
  },
});

export default DisciplineCard;
