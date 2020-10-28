import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import micIcon from "../images/mic.png"
import "./Dictaphone.scss"

const Dictaphone = (props) => {
  const { transcript} = useSpeechRecognition();

  const { setValue} = props;
  useEffect(() => {

    setValue(transcript);
    console.log(transcript);


  }, [setValue, transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }


  return <img className="mic" src={micIcon} alt="Microphone icon" onClick={SpeechRecognition.startListening}/>;
};
export default Dictaphone;
