import { useEffect, useState } from 'react';
import {
  CallControls,
  CallingState,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from '@stream-io/video-react-sdk';

import '@stream-io/video-react-sdk/dist/css/styles.css';
// import './style.css'

const apiKey = 'mmhfdzb5evj2'; // the API key can be found in the "Credentials" section
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUmV2YW4iLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1JldmFuIiwiaWF0IjoxNzE1NDg0OTEyLCJleHAiOjE3MTYwODk3MTd9.kak2hA__zT35XxT50HD4dNAgOnJIinwissEkMAc0x90'; // the token can be found in the "Credentials" section
const userId = 'Revan'; // the user id can be found in the "Credentials" section
const callId = 'o57WxHSpXCCH'; // the call id can be found in the "Credentials" section

const user = {
  id: userId,
  name: 'Revan',
  image: 'https://getstream.io/random_svg/?id=Revan&name=Revan',
};

// initialize the StreamVideoClient
const client = new StreamVideoClient({ apiKey, user, token });;

const VideoCall = () => {
    const [call, setCall] = useState(null);
  useEffect(() => {
    const myCall = client.call('default', callId);
    myCall.join({ create: true }).catch((err) => {
      console.error(`Failed to join the call`, err);
    });

    setCall(myCall);

    return () => {
      setCall(null);
      myCall.leave().catch((err) => {
        console.error(`Failed to leave the call`, err);
      });
    };
  }, []);

  if (!call) return null;
  
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <UILayout />
      </StreamCall>
    </StreamVideo>
  );
}

export const UILayout = () => {
    const { useCallCallingState } = useCallStateHooks();
    const callingState = useCallCallingState();
    if (callingState !== CallingState.JOINED) {
      return <div>Loading...</div>;
    }
  
    return (
      <StreamTheme>
        <SpeakerLayout participantsBarPosition="bottom" />
        <CallControls />
      </StreamTheme>
    );
  };
  

export default VideoCall