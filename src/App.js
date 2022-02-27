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
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import YouTube from 'react-youtube';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { useState, useEffect } from 'react';

const UE = ['0, 87, 183', '255, 215, 0'];

const opts = {
  autoplay: 1,
  width: '100%',
  height: window.innerHeight / 2 - 100,
};

function Timeline({ activeTwitter, text }) {
  useEffect(() => {
    console.log('stuff changed', activeTwitter, text);
  }, [activeTwitter, text]);
  return (
    <TwitterTimelineEmbed
      flex="2"
      key={activeTwitter}
      sourceType="profile"
      screenName={activeTwitter}
      theme={text}
      options={{
        height: window.innerHeight / 2 - 85,
        width: '200%',
        theme: text,
      }}
    />
  );
}

function App() {
  const text = useColorModeValue('dark', 'light');
  const [activeTwitter, setActiveTwitter] = useState('ZelenskyyUa');
  return (
    <ChakraProvider theme={theme}>
      <Box
        as="main"
        maxW="screen-xl"
        mx="auto"
        px={4}
        py={4}
        fontSize="lg"
        fontFamily="mono"
      >
        <SimpleGrid columns={[1, null, 2]} spacing="40px">
          <Box height="44vh">
            <Tabs isLazy variant="enclosed" defaultIndex={1}>
              <TabList>
                <Tab isDisabled>LIVE VIDEO NEWS</Tab>
                <Tab>Sky</Tab>
                <Tab>Deutsche Welle</Tab>
                <Tab>Al Jazeera</Tab>
                <Tab>United Nations</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel>
                  <YouTube videoId="9Auq9mYxFEE" opts={opts} />
                </TabPanel>
                <TabPanel>
                  <YouTube videoId="V9KZGs1MtP4" opts={opts} />
                </TabPanel>
                <TabPanel>
                  <YouTube videoId="-upyPouRrB8" opts={opts} />
                </TabPanel>
                <TabPanel>
                  <YouTube videoId="9CdY7t5VKIY" opts={opts} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box height="44vh">
            <Tabs isLazy variant="enclosed" defaultIndex={1}>
              <TabList>
                <Tab isDisabled>Social Feeds</Tab>
                <Tab>Twitter</Tab>
                <Tab>Anon Chat</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel>
                  <SimpleGrid columns={[2]} spacing="40px">
                    <Box w="30%">
                      {[
                        'ZelenskyyUa',
                        'vonderleyen',
                        'KyivIndependent',
                        'Tsihanouskaya',
                        'EuromaidanPress',
                      ].map(name => {
                        return (
                          <Box
                            flex="0"
                            as="button"
                            onClick={() => setActiveTwitter(name)}
                            borderRadius="md"
                            bg={
                              activeTwitter === name
                                ? `rgb(${UE[0]})`
                                : `rgb(${UE[1]})`
                            }
                            px={4}
                            h={8}
                            mb={2}
                          >
                            @{name}
                          </Box>
                        );
                      })}
                    </Box>
                    <Box w="100%" flex="2">
                      <Timeline activeTwitter={activeTwitter} text={text} />
                    </Box>
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box height="44vh">
            <Tabs isLazy variant="enclosed" defaultIndex={1}>
              <TabList>
                <Tab isDisabled>WEBCAM</Tab>
                <Tab>Politischios.gr</Tab>
                <Tab>Live Moments</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel>
                  <YouTube videoId="HIPNVm6lNfM" opts={opts} />
                </TabPanel>
                <TabPanel>
                  <YouTube videoId="lf-EEnsxZXo" opts={opts} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Box height="44vh">
            <Tabs isLazy variant="enclosed" defaultIndex={1}>
              <TabList>
                <Tab isDisabled>RESOURCES</Tab>
                <Tab>Live News Pages</Tab>
                <Tab>Real-time Airspace Map</Tab>
                <Tab>Other Maps</Tab>
                <Tab>DONATE</Tab>
                <Tab>About</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel m={4}>
                  <Text>
                    <ol>
                      <li>
                        <Link
                          href="https://www.reddit.com/live/18hnzysb1elcs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reddit /WorldNews Ukraine Thread
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.bbc.co.uk/news/live/world-europe-60542877"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          BBC Live News Coverage
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.theguardian.com/world/series/ukraine-live"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Guardian Ukraine Crisis Live Thread
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </li>
                    </ol>
                  </Text>
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>

                <TabPanel m={4}>
                  <Text>
                    <ol>
                      <li>
                        <Link
                          href="https://twitter.com/olex_scherba/status/1497601344206557184"
                          isExternal
                        >
                          Official crypto wallets of ukraine BTC -
                          357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P ETH and USDT
                          (ERC-20) - 0x165CD37b4C644C2921454429E7F9358d18A45e14
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </li>
                    </ol>
                  </Text>
                </TabPanel>
                <TabPanel m={4}>
                  <Text>
                    <p>
                      I made this website as an individual developer mainly for
                      my own convenience, so I don't have to keep track of so
                      many websites.
                    </p>
                    <p>
                      If you would like to provide video/news/help resources for
                      a different language,
                      <Link
                        href="https://twitter.com/The_Botschaft"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        please let me know on twitter.
                      </Link>
                    </p>
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </SimpleGrid>
      </Box>
      <Nav />
    </ChakraProvider>
  );
}

export default App;
