import { useEffect, useState } from 'react';

export default function Chat() {
  const [necessaryClick, setNecessaryClick] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNecessaryClick(true);
    }, 5000);
  }, []);
  return (
    <>
      <div
        className="overlay"
        style={{
          position: 'absolute',
          width: '50%',
          height: window.innerHeight / 2 - 85,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: necessaryClick ? 'none' : 'block',
        }}
      ></div>
      <iframe
        id="ircChat"
        title="Chat"
        width="100%"
        height={window.innerHeight / 2 - 85}
        allowtransparency="true"
        frameBorder="0"
        // allow="microphone; camera; display-capture; fullscreen"
        src={`https://kiwiirc.com/client/kiwiirc.hybridirc.com/?nick=ambassador-?&style="border:0; width:100%; height:450px;&theme=cli#bunkerhub`}
      />
    </>
  );
}
