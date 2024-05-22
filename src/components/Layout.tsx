import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"


export const Layout = ({ children }: any) => {
  return(
    <>
      <Header />
      <Box minHeight='90vh' backgroundColor='purple.700' padding='25px'>
        {children}
      </Box>          
      <Footer />
    </>
  )
}
