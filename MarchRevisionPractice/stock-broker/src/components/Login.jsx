import { background, Box,Heading,Input } from '@chakra-ui/react'
import React from 'react'

export const Login = () => {
  return (
    <Box margin={'auto'} color='white'  bg={'blue'} w={'50%'} padding={'20px 180px'}  >
        <Box display={'grid'} gap={'20px'} >
        <Heading>login</Heading>
        
        
        <Input type="text" />
        <Input type="text" />
        </Box>
    </Box>
  )
}
