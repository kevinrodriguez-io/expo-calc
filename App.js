import { StatusBar } from 'expo-status-bar';
import { Calculator } from './src/views/Calculator';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Calculator />
    </>
  );
};

export default App;
