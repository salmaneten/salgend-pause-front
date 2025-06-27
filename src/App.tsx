import React from 'react'
import { Flex } from '@chakra-ui/react';
import './App.css';
import Sidebar from './components/Sidebar.tsx';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (    
    <Router>
      <Flex w='100vw' h='100vh' bgColor="dark0">
        <Sidebar/>              
      </Flex>
    </Router>
  );
}

export default App;
