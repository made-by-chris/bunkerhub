import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Nav() {
  return (
    <Flex as="header" position="fixed" w="100%">
      <Spacer />
      <ColorModeSwitcher />
    </Flex>
  );
}
