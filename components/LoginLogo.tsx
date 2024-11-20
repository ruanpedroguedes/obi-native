import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts, Arvo_400Regular } from '@expo-google-fonts/arvo';

const LoginLogo = () => {
  const [fontsLoaded] = useFonts({
    Arvo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.mainText}>OBI</Text>
        <Image 
          source={require('@/assets/logobranca.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.subtitle}>Conectados para construir o seu amanhã!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 90,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontFamily: 'Arvo_400Regular',
    fontSize: 50,
    color: '#FFFFFF',
    lineHeight: 62,
  },
  image: {
    width: 45,
    height: 55,
    marginLeft: 10,
  },
  subtitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#FFFFFF',
    lineHeight: 18,
    marginTop: 8,
  },
});

export default LoginLogo;
