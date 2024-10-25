import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface LoginTextProps extends TextProps {
  children: React.ReactNode;
}

const LoginText: React.FC<LoginTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 33,
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 22.5,
  },
});

export default LoginText;
