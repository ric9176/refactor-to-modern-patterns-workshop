import Header from './Header';
import {
  FunctionalComponent,
  HOCclassComponent,
  RenderPropsClassComponent,
} from './example';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <>
      <Header />
      <Box m={4} p={4} bg='tomato'>
        {/* <FunctionalComponent /> */}
        <RenderPropsClassComponent />
        {/* <HOCclassComponent title='something' /> */}
      </Box>
    </>
  );
}

export default App;
