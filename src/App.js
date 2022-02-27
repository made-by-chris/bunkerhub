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
  const [turnOnVideoCall, setTurnOnVideoCall] = useState(false);
  return (
    <ChakraProvider theme={{...theme, components: {...theme.components, Button: { baseStyle: { _focus: { boxShadow: 'none' } } }}}}>
      <Nav />

      <Box
        as="main"
        maxW="screen-xl"
        mx="auto"
        px={2}
        py={2}
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
            <Tabs variant="enclosed" defaultIndex={1}>
              <TabList>
                <Tab isDisabled>SOCIAL</Tab>
                <Tab>Anon Chat</Tab>
                <Tab>Twitter</Tab>
                <Tab>Discord</Tab>
                <Tab>Public Video Chat</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel>
                  <iframe
                    title="Anon Chat"
                    src={`https://web.libera.chat/gamja/?nick=anon-user-${Math.floor(
                      Math.random() * 12303123
                    )}&channels=#bunkerhud`}
                    width="100%"
                    height={window.innerHeight / 2 - 85}
                    allowtransparency="true"
                    frameBorder="0"
                  />
                </TabPanel>
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
                            key={name}
                            flex="0"
                            as="button"
                            onClick={() => setActiveTwitter(name)}
                            borderRadius="md"
                            bg={
                              activeTwitter === name
                                ? `rgb(${UE[1]})`
                                : `rgb(${UE[0]})`
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

                <TabPanel>
                  <Link href="" isExternal>
                    should we make a{' '}
                    <Text
                      as="span"
                      fontSize="lg"
                      fontWeight="bold"
                      color="current"
                      display="inline-block"
                      mr={2}
                    >
                      Discord? <ExternalLinkIcon />
                    </Text>
                  </Link>
                </TabPanel>
                <TabPanel>
                  {turnOnVideoCall ? (
                    <iframe
                      allow="camera; microphone; display-capture"
                      src="https://meet.jit.si/bunker"
                      allowfullscreen="true"
                      style={{
                        width: 100 + '%',
                        height: window.innerHeight / 2 - 85,
                      }}
                    ></iframe>
                  ) : (
                    <Box
                      flex="1"
                      as="button"
                      onClick={() => setTurnOnVideoCall(true)}
                      borderRadius="md"
                      bg={`rgb(${UE[0]})`}
                      px={4}
                      h={8}
                      mb={2}
                    >
                      Turn on video call
                    </Box>
                  )}
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
                <Tab>Airspace Map</Tab>
                <Tab>Other Maps</Tab>
                <Tab>Live News Pages</Tab>
                <Tab>DONATE</Tab>
                <Tab>About</Tab>
              </TabList>
              <TabPanels>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
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

                <TabPanel m={4}>
                  <Text>
                    <ol>
                      <li>
                        <Link
                          href="https://twitter.com/Ukraine/status/1497594592438497282"
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
                        {' '}
                        please let me know.
                      </Link>
                    </p>
                  </Text>
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
