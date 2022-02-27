import Nav from './Nav';
import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Code,
} from '@chakra-ui/react';

// video , live feed, links, map, chat

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <Box
        as="main"
        maxW="screen-xl"
        mx="auto"
        px={4}
        py={4}
        color="gray.800"
        fontSize="lg"
        fontFamily="mono"
      >
        <Nav />
      </Box>

      <Box
        as="main"
        maxW="screen-xl"
        mx="auto"
        px={4}
        py={4}
        color="gray.800"
        fontSize="lg"
        fontFamily="mono"
      >
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box bg="" height="44vh">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Text>
                    Edit <Code fontSize="xl">src/App.js</Code> and save to
                    reload.
                  </Text>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box bg="" height="44h">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box bg="" height="44vh">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box bg="" height="44vh">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
