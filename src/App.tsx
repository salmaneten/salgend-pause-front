import React from 'react'
import { Box, Flex } from '@chakra-ui/react';
import './App.css';
import Sidebar from './components/Sidebar.tsx';
import Table from './components/Table.tsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (    
    <Router>
      <Flex w='100vw' h='100vh'>
        <Sidebar/>              
      </Flex>
    </Router>
  );
}

export default App;
