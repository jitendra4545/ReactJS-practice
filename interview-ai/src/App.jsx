import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Interview from './components/Interview'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'

import RecordRTC from 'recordrtc';
function App() {

  
  
  return (
    <Box bg='orange.300' w='100vw' h='100vh' >
     <Box m='auto' w='200px'>
    
      </Box> 
     
     <Interview/>
   
    </Box>
  )
}

export default App
