import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Nav() {
  return (
    <div style={{position:"absolute", right: "0px"}}>
      <ColorModeSwitcher />
    </div>
  );
}
