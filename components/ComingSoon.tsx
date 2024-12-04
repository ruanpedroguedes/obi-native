import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const ComingSoon = ({ screenName }: { screenName: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Em breve {screenName}
      </Text>
      <Image 
        source={require('@/assets/icons/barrier.png')}
        style={styles.image}
      />
      <Text style={styles.caption}>
        Estamos trabalhando o mais rápido possível para oferecer mais funcionalidades.
      </Text>
    </View>
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