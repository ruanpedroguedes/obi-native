import { Poppins_300Light, Poppins_300Light_Italic, useFonts } from '@expo-google-fonts/dev';
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface LoginTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const LoginTextInput: React.FC<LoginTextInputProps> = ({
  value,
  onChangeText,
  placeholder = "placeholder",
  secureTextEntry = false,
}) => {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_300Light_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    backgroundColor: '#E2E2E2',
    borderRadius: 99,
    paddingHorizontal: 20,
    fontFamily: 'Poppins_300Light_Italic',
    fontSize: 15,
    lineHeight: 22.5,
  },
});

export default LoginTextInput;