import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export const ComingSoon = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Em breve</ThemedText>
      <Image 
        source={require('@/assets/icons/barrier.png')}
        style={styles.image}
      />
      <ThemedText style={styles.caption}>
        Estamos trabalhando o mais rápido possível para oferecer mais funcionalidades.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  caption: {
    fontSize: 16,
    textAlign: 'center',
  },
});
