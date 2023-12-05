import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Flex,
  Heading
} from '@chakra-ui/react';
import { login } from '../../services/login';


interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = () => {
  return(
    <ChakraProvider>
      <Box minHeight='90vh' backgroundColor='purple.700' padding='25px'>
        <Center marginTop="45px">
        <Box backgroundColor='gray.100' borderRadius='25px' padding='15px' minWidth="40vw" minHeight="35vh" >
        <Center>
          <Heading color="purple.800">Faça o login</Heading>
        </Center>
        <Input placeholder="email" marginTop="40px" variant='flushed'/>
        <Input placeholder="password" type="password" marginTop="10px" variant='flushed'/>
        <Center>
          <Button onClick={login} colorScheme='purple' size='lg' width='100%' marginTop='40px'>
            Login
          </Button>
            </Center>
            
        </Box>
        </Center>
    </Box>
  </ChakraProvider>
  )
}