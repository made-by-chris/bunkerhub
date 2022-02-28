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
    <iframe
      id="ircChat"
      title="Chat"
      src={`https://web.libera.chat/gamja/?nick=anon-user-${Math.floor(
        Math.random() * 12303123
      )}&channels=#bunkerhub`}
      width="100%"
      height={window.innerHeight / 2 - 85}
      allowtransparency="true"
      frameBorder="0"
    />
  );
}
