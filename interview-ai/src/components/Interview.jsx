import { Avatar, Box, Button, Flex, Heading, keyframes } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Webcam from 'react-webcam';
const Interview = () => {
    const pulseRing = keyframes`
	0% {
    transform: scale(0.43);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;  
    const [listen, setlisten] = useState(false)
    const [Text, setText] = useState("")
    const [ans, setAns] = useState("")
    const [loading,setLoading]=useState(false)
    const webcamRef = React.useRef(null);
const [Data,setData]=useState([])
    const clearChat=()=>{
        axios.delete(`https://careful-bathing-suit-fawn.cyclic.app/int`).then((res)=>{
            console.log(res.data)
            getChat()
        }).catch((err)=>{
            console.log(err)
        })
    }



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

    const getChat = () => {
        axios.get(`https://careful-bathing-suit-fawn.cyclic.app/int`).then((res) => {
            setData(res.data)
        }).catch(err => console.log(err))
    }

    const AddPost = () => {
        console.log("sjhshjsa",Text,ans)
        const payload = {
            text: Text
            ,
            ans
        }
        axios.post(`https://careful-bathing-suit-fawn.cyclic.app/int`, payload).then((res) => {
            console.log(res)
            getChat()
        }).catch(err => console.log(err))
    }

    const handleAskQuestion = async () => {
        setLoading(true)
        const payload = {
               model: "gpt-3.5-turbo",
               messages: [
               { role: "system", content: `${ans}` },
               { role: "user", content: `${Text}` },
               ],
               };
               fetch(`https://api.openai.com/v1/chat/completions`, {
                   method: "POST",
                   headers: {
                   "Content-Type": "application/json",
                   "Authorization": `Bearer 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`,
                   },
                   body: JSON.stringify(payload),
                   })
                   .then(response => response.json())
                   .then(data => {console.log(data)
                       setAns(data.choices[0].message.content);
                       setLoading(false)
                   })
                   .catch(error => console.error('Error:', error));
                   setLoading(false)  
                         }

    useEffect(() => {
       
        if (Text !== "" ) {
            handleAskQuestion()
        }
    }, [Text])

    useEffect(()=>{
        if(Text!==""&& ans!==""){
            AddPost()
        
           
            
           console.log("sdsdsd",ans)
            const speaker = new SpeechSynthesisUtterance(ans);
            window.speechSynthesis.speak(speaker);
            console.log("Speak",ans)
            setAns("")
            console.log(" afterSpeak",ans)
        }
       
    },[ans])
    
  
    // console.log(Data)


    return (
        <Box >
            
            <Heading p='40px' color={'white'} textAlign={'center'}>STT && TTS Converter</Heading>

            {/* <input type="" onChange={(e) => setvalue(e.target.value)} /><button onClick={() => setText(value)}>ADD</button> */}
            <Box display={'flex'} m='auto'  gap='5'>
                <Box bg='white' ml='30px' borderRadius={'10px'}  p='20px' border={'2px solid grey'} display={'flex'} gap='10'>
                    <Box p='20' h='300px' w='450px' bg='green' borderRadius={'20px'} border={'5px solid blue'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        {/* <Avatar size={'xl'} /> */}
                        <Box
     
        as="div"
        position="relative"
        w={'96px'}
        h={'96px'}
        _before={{
          content: "''",
          position: "relative",
          display: "block",
          width: "300%",
          height: "300%",
          boxSizing: "border-box",
          marginLeft: "-100%",
          marginTop: "-100%",
          borderRadius: "50%",
          bgColor: "blue.400",
          animation: `1.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
        }}
      >
        <Avatar
         
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
                        {/* <Webcam  ref={webcamRef} /> */}
                    </Box>
                    <Box p='20px' h='300px' w='450px' bg='green' borderRadius={'20px'} border={'5px solid blue'}>
                        {Text == "" ? <Box display={'flex'} justifyContent={'center'} alignItems={'center'}><Heading size={'md'} color={'white'}>Speak Something ....</Heading></Box>:<Heading size='md' color={'white'}>{Text}</Heading>}
                    </Box>
                </Box>
                <Box  bg='white' h='350px' color={'white'} overflowY={'scroll'} w='450px' p='10px' borderRadius={'10px'} border={'4px solid blue'}>
                    {
                        Data.length > 0 &&
                        Data.map((el) => {
                            
                            return <Box >
                                <Heading w='70%' m={'3'} bg='green' borderRadius={'5px'} p='4px' textAlign={'left'} fontSize={'md'}>. {el.text}</Heading>
                                <Heading w='70%' ml='30%'  bg='green.400' borderRadius={'5px'} p='4px'  fontSize={'md'}>. {el.ans}</Heading>
                            </Box>
                        })
                    }
                    {listen&& <Heading m={'3'} bg='teal' w='50px' borderRadius={'5px'} p='4px' textAlign={'left'} fontSize={'lg'}>......</Heading>}
                </Box>

            </Box>
            <Flex p='30px 80px'  justifyContent="space-between" >
                <Button
                    onClick={handleRecord}
                    px={6}
                    fontSize={'md'}
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
                    {listen ? "Listening ......" : "Click Here To Speak"}
                </Button>

                <Button
                    onClick={clearChat}
                    px={6}
                    fontSize={'md'}
                    rounded={'full'}
                    bg={'red'}
                    color={'white'}
                    
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'red.500',
                    }}

                    _focus={{
                        bg: 'red.400',
                    }}>
                    Clear Chat
                </Button>
            </Flex>
        </Box>
    )
}

export default Interview