import { Box, Icon, Spacer, Flex, Heading, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';


const Header = () => (
  <Flex>
    <Box p='2'>
      <Heading size='md'>Refactor to modern react patterns workshop</Heading>
    </Box>
    <Spacer />
    <Box>
      <Link href="https://github.com/ric9176/refactor-to-modern-patterns-workshop">
        <Icon as={FaGithub} m={4}/>
      </Link>
    </Box>
  </Flex>
);

export default Header;
