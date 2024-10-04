import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'spanText';
  fontSize?: number;
};

export function OBIText({
  style,
  type = 'default',
  fontSize,
  ...rest
}: ThemedTextProps) {

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'spanText' ? styles.spanText : undefined,
        fontSize ? { fontSize } : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_400Regular',
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold',
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: 'Poppins_700Bold',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold'
  },
  spanText: {
    lineHeight: 27,
    color: '#103ADA',
    fontFamily: 'Poppins_500Medium',
  },

});
