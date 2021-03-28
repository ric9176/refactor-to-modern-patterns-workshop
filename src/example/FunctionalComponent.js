import { Box, Button } from '@chakra-ui/react';
import useDocumentTitleEffect from './useDocumentTitle.js';

const DocumentTitleEffectFnComponent = () => {
  const { count, setCount } = useDocumentTitleEffect({ title: 'HEY!' });
  return (
    <>
      <Box m='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
        Click counter implemented for the document title
      </Box>

      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </>
  );
};

export default DocumentTitleEffectFnComponent;
