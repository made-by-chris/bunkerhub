import { Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export default function Nav() {
  return (
    <Flex as="header" position="fixed" w="100%">
      <ColorModeSwitcher />
    </Flex>
  );
}

// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button,
//   Input,
// } from '@chakra-ui/react';
// // import { useTranslation } from 'react-i18next';
// import { useRef } from 'react';

// export default function DrawerExample() {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const btnRef = useRef();

//   return (
//     <>

//       {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
//         menu
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement="right"
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader>Create your account</DrawerHeader>

//           <DrawerBody>
//             <Input placeholder="Type here..." />
//           </DrawerBody>

//           <DrawerFooter>
//             <Button variant="outline" mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme="blue">Save</Button>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer> */}
//     </>
//   );
// }
