import { styles } from './Input.styles';
import { TextInput } from 'react-native';

export const Input = ({ readonly = false, ...props }) => {
  return (
    <TextInput {...props} style={styles.input} editable={readonly === false} />
  );
};
