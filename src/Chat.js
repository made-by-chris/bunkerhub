import { useLayoutEffect } from 'react';

export default function Chat() {
  useLayoutEffect(() => {
    // setTimeout(() => {
    //   let ircChat = document.getElementById('ircChat');
    //   let doc = ircChat.contentDocument;
    //   doc.body.innerHTML = '';
    // }, 2000);
  }, []);

  return (
    // // <h1>anon chat coming soon :) </h1>
    // // <iframe
    //   id="ircChat"
    //   title="Chat"
    //   src={`https://web.libera.chat/gamja/?nick=anon-user-${Math.floor(
    //     Math.random() * 12303123
    //   )}&channels=#bunkerhub`}
    //   width="100%"
    //   height={window.innerHeight / 2 - 85}
    //   allowtransparency="true"
    //   frameBorder="0"
    // // />
    <iframe
      id="ircChat"
      title="Chat"
      width="100%"
      height={window.innerHeight / 2 - 85}
      allowtransparency="true"
      frameBorder="0"
      src={`https://thelounge.hybridirc.com/?theme=morning&join=bunkerhub&nick=anon-user-${Math.floor(
        Math.random() * 12303123
      )}`}
    />
  );
}
