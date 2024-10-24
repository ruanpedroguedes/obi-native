import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface OBITextProps extends TextProps {
  weight?: '400' | '500' | '600' | '700';
}

const OBIText: React.FC<OBITextProps> = ({ style, weight = '400', ...props }) => {
  let fontFamily;
  switch (weight) {
    case '500':
      fontFamily = 'Poppins_500Medium';
      break;
    case '600':
      fontFamily = 'Poppins_600SemiBold';
      break;
    case '700':
      fontFamily = 'Poppins_700Bold';
      break;
    default:
      fontFamily = 'Poppins_400Regular';
  }

  return <Text {...props} style={[styles.text, { fontFamily }, style]} />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default OBIText;