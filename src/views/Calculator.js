import { View, Text } from 'react-native';
import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { styles } from './Calculator.styles';

export const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);

  const [result, setResult] = useState(null);

  const handleFirstNumberChange = text => {
    setFirstNumber(parseInt(text));
  };
  const handleSecondNumberChange = text => {
    setSecondNumber(parseInt(text));
  };

  const handleAddition = () => {
    setResult(firstNumber + secondNumber);
  };
  const handleSubtraction = () => {
    setResult(firstNumber - secondNumber);
  };
  const handleMultiplication = () => {
    setResult(firstNumber * secondNumber);
  };
  const handleDivision = () => {
    setResult(firstNumber / secondNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Input
          onChangeText={handleFirstNumberChange}
          placeholder="Numero #1"
          keyboardType="numeric"
        />
        <View style={styles.miniSeparator} />
        <Input
          onChangeText={handleSecondNumberChange}
          placeholder="Numero #2"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.toolBar}>
        <Button onPress={handleAddition}>➕</Button>
        <Button onPress={handleSubtraction}>➖</Button>
        <Button onPress={handleMultiplication}>❌</Button>
        <Button onPress={handleDivision}>➗</Button>
      </View>
      <View style={styles.row}>
        <Input readonly placeholder="Resultado" keyboardType="numeric" value={result?.toString() ?? undefined} />
      </View>
      <Text>
        {JSON.stringify({
          firstNumber,
          secondNumber,
          result,
        })}
      </Text>
    </View>
  );
};
