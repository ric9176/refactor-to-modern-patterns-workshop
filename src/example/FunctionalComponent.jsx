import { Box, Button } from '@chakra-ui/react';
import useDocumentTitleEffect from './useDocumentTitle';
import { useCounter } from '../CounterContext';

const DocumentTitleEffectFnComponent = () => {
  const { count, setCount } = useCounter();

  return (
    <Box bg='green'>
      <Box m='1' fontWeight='semibold' as='h4'>
        Count: {count}
      </Box>

      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </Box>
  );
};

export default DocumentTitleEffectFnComponent;
