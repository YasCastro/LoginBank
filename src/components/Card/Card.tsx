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
import { useState, useEffect } from 'react';
import {api} from '../../api'


interface UserData {
  email: string,
  password: string,
  name: string
}

export const Card = () => {
  const [email, setEmail] = useState<string>('')
  const [userData, setUserData] = useState<null | UserData >()

  useEffect(() => {
    const getData = async () => { 
      const data: any | UserData  = await api
      setUserData(data)
    }
    getData();
  })

  console.log(userData)

  return(
    <Box minHeight='90vh' backgroundColor='purple.700' padding='25px'>
      {userData === null || userData === undefined ? 
      <h1>Carregando..</h1> : <h1>Dados carregados</h1>}
        <Center marginTop="45px">
        <Box backgroundColor='gray.100' borderRadius='25px' padding='15px' minWidth="40vw" minHeight="35vh" >
        <Center>
            <Heading color="purple.800">Faça o login</Heading>
        </Center>
          <Input placeholder="email" marginTop="40px" variant='flushed' value={ email } onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="password" type="password" marginTop="10px" variant='flushed'/>
        <Center>
          <Button onClick={() => login(email)} colorScheme='purple' size='lg' width='100%' marginTop='40px'>
            Login
          </Button>
            </Center>
            
        </Box>
        </Center>
    </Box>
  )
}