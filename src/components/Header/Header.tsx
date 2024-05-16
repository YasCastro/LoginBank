import { Box, Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react"

export const Header  = () => {
  return(
      <Box bg="purple.300" color="white" p={2}>
      <Flex justify="space-between" align="center">
        <Heading size="md">DIO Bank</Heading>
        <Box>
          <Button colorScheme="whiteAlpha">Sign Up</Button>
        </Box>  
      </Flex>
    </Box>
  )
}
