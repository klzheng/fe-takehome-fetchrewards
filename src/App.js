import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <ChakraProvider>
      <LoginForm />
    </ChakraProvider>
  );
}

export default App;
