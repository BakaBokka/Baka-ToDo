import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import micIcon from "../images/mic.png";
import "./Dictaphone.scss";

const Dictaphone = (props) => {
  const [lang, setLang] = useState("eng");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { setValue } = props;
  const recognizeEvents = SpeechRecognition.getRecognition();

  useEffect(() => {
    setValue(transcript);
  }, [setValue, transcript]);

  useEffect(() => {
    let userlang = navigator.language;
    setLang(userlang);
  }, [setLang, lang]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const startSpeech = () => {
    SpeechRecognition.startListening({ language: lang });
  };

  recognizeEvents.onspeechend = function (event) {
    console.log(transcript);
    props.handleSubmit(event);
    resetTranscript();
  };

  return (
    <img
      className="mic"
      src={micIcon}
      alt="Microphone icon"
      onClick={startSpeech}
    />
  );
};
export default Dictaphone;
