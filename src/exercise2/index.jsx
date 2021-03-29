import FunctionalComponent from './FunctionalComponent';
import ClassComponentRenderProps from './ClassComponentRenderProps';
import ClassComponentHOC from './ClassComponentHOC';
import { Flex } from '@chakra-ui/react';

const Excercise2 = () => (
  <>
    <FunctionalComponent />
    <Flex>
      <ClassComponentRenderProps />
      <ClassComponentHOC />
    </Flex>
  </>
);

export default Excercise2;
