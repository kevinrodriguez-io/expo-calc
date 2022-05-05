import { TouchableOpacity, Text } from 'react-native';
import { styles } from './Button.styles';

export const Button = ({ children, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};
