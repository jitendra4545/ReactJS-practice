import { Box } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box>
      <Box p={'10px'} fontSize={'22px'} gap={'10'} fontWeight={'bold'} w='50%' m='auto'   display={'flex'} justifyContent={'space-around'} >
        <Box bg='skyblue' borderRadius={'md'} p='10px 20px'>Home</Box>
        <Box bg='skyblue' borderRadius={'md'} p='10px 20px'>Interview Ai</Box>
      </Box>
    </Box>
  )
}

export default Navbar