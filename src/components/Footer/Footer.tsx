import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react"


export const Footer  = () => {
  return(
       <Box bg="gray.100" p={2}>
      <Flex justify="center">
        <Text>Copyright© {new Date().getFullYear()} DIO Bank</Text>  
      </Flex>
    </Box>
  )
}
