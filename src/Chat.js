import { useLayoutEffect } from 'react';

export default function Chat() {
  return (
    <iframe
      id="ircChat"
      title="Chat"
      width="100%"
      height={window.innerHeight / 2 - 85}
      allowtransparency="true"
      frameBorder="0"
      src={`https://thelounge.hybridirc.com/?theme=morning&join=bunkerhub&nick=ambassador-${Math.floor(
        Math.random() * 12303123
      )}`}
    />
  );
}
