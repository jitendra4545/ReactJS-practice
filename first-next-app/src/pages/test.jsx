import { Avatar, Box, Button, Flex, Heading, keyframes} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Test = () => {
  
    const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	` 


    const [listen, setlisten] = useState(false)
    const [Text, setText] = useState("")


    const startRecord = () => {
        const recognition = new window.webkitSpeechRecognition();

        recognition.onstart = () => {
            setlisten(true);
        };

        recognition.onresult = (e) => {
            const result = e.results[0][0].transcript;
            setText(result);

        };

        recognition.onend = () => {
            setlisten(false);
        };

        recognition.start();

    }

    const handleRecord = () => {
        if (window.webkitSpeechRecognition) {
          startRecord();
        } else {
          alert(
            "Browser Not Support",
          );
        }
      };

      console.log(Text)


useEffect(()=>{
   
   if(Text!==""){
   
    const speaker = new SpeechSynthesisUtterance(Text);
    window.speechSynthesis.speak(speaker);
   }
  },[Text])



    return (
        <>
            <Heading p='30px' textAlign={'center'}>Speech To Text -- Text To Speech Converter</Heading>
            <Box  borderRadius={'10px'}  w='80%' m='auto' p='20px' border={'2px solid grey'} display={'grid'} gridTemplateColumns={'repeat(2,1fr)'} gap='10'>

                <Box 
                
                bg='teal' p=' 70px 60px' borderRadius={'20px'} display={'flex'} justifyContent={'center'} alignItems={'center'} border={'2px solid pink'}>

                    <Avatar size={'xl'} />
                </Box>
                <Box p='10px 40px'  bg='teal' borderRadius={'20px'} border={'2px solid pink'}>
<Heading color={'white'}>{Text}</Heading>
{/* {
    Data.length>0 && 
    Data.map((el)=>{
        return <Heading>{el}</Heading>
    }) 
} */}
                </Box>

            </Box>
            <Flex h="100vh" mt='40px' justifyContent="center" >
                <Button
                    onClick={handleRecord}
                    px={6}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                   
                    _focus={{
                        bg: 'blue.500',
                    }}>
                   {listen?"Listening ......":"Click Here To Speak"}
                </Button>
            </Flex>
        </>
    )
}

export default Test