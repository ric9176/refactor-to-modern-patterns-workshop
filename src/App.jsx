import Header from './Header';
import {
  FunctionalComponent,
  HOCclassComponent,
  RenderPropsClassComponent,
} from './example';
import Exercise1 from './exercise1';
import Exercise2 from './exercise2';
import ExerciseContext from './exerciseContext/ThemedApp';
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
        <Box p={4} bg='tomato'>
          {/* <FunctionalComponent /> */}
          <RenderPropsClassComponent />
          {/* <HOCclassComponent title='something' /> */}
        </Box>
        <Heading>Exercise 1</Heading>
        <Box>
          <Exercise1 />
        </Box>
        <Heading>Exercise 2</Heading>
        <Box>
          <Exercise2 />
        </Box>
        <Heading>Context Exercise</Heading>
        <ExerciseContext />
      </VStack>
    </>
  );
}

export default App;
