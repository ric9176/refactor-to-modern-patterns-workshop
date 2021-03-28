import { Box, Button, Spacer, Flex, Heading } from '@chakra-ui/react';

const Header = () => (
  <Flex>
    <Box p='2'>
      <Heading size='md'>Refactor to modern react patterns workshop</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme='teal' mr='4'>
        Sign Up
      </Button>
      <Button colorScheme='teal'>Log in</Button>
    </Box>
  </Flex>
);

export default Header;
