import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from 'react-router-dom'
import CardInfo from "../components/CardInfo/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";

interface UserData {
  email: string,
  password: string,
  name: string,
  id: string
}

const Conta = () => {

  const [userData, setUserData] = useState<null | UserData >()

  useEffect(() => {
    const getData = async () => { 
      const data: any | UserData  = await api
      setUserData(data)
    } 
    getData();
  }, [])
  
  const actualDate = new Date();

  const { id } = useParams();
  const navigate = useNavigate();

  if (userData && id !== userData.id)
  {
    navigate('/')
   }

  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {
          userData === undefined || userData === null ?
            (<Center>
              <Spinner size='xl' color='white' />
            </Center>) :
            (
              <>
                <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={ `${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}` } />
                <CardInfo mainContent='Saldo' content=""/>
              </>
              )
        }
        
        </SimpleGrid>
    </Center>
  );
}

export default Conta;