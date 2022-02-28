import { Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { TwitterShareButton, TwitterHashtagButton } from 'react-twitter-embed';
export default function Nav() {
  return (
    <div style={{ position: 'absolute', right: '0px' }}>
      #bunkerhub
      <ColorModeSwitcher />
    </div>
  );
}
