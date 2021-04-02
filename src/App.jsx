import Header from './Header';
import {
  FunctionalComponent,
  HOCclassComponent,
  RenderPropsClassComponent,
} from './example';
import Excercise1 from './exercise1';
import Excercise2 from './exercise2';
import { Box, VStack, StackDivider, Heading } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Header />
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        m={6}
      >
        <Heading>Example</Heading>
        <Box p={4}>
          <FunctionalComponent />
          <RenderPropsClassComponent />
          {/* <HOCclassComponent title='something' /> */}
        </Box>
        <Heading>Exercise 1</Heading>
        <Box>
          <Excercise1 />
        </Box>
        <Heading>Exercise 2</Heading>
        <Box>
          <Excercise2 />
        </Box>
      </VStack>
    </>
  );
}

export default App;
