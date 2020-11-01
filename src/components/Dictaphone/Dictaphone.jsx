import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import micIcon from "../../images/mic.svg";
import "./Dictaphone.scss";

const Dictaphone = ({ setValue, handleSubmit }) => {
  const [lang, setLang] = useState("eng");


  const recognizeEvents = SpeechRecognition.getRecognition();
  const { transcript, resetTranscript } = useSpeechRecognition();

//Записываем результат голосового набора в value инпута
  useEffect(() => {
    setValue(transcript);
  }, [setValue, transcript]);

//Уставливаем язык голосового набора, основываясь на настройках браузера пользователя
  useEffect(() => {
    let userlang = navigator.language;
    setLang(userlang);
  }, [setLang, lang]);

//Если разспонать головой набор не вышло, вернёт null
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

//Функция активирует головой набор
  const startSpeech = () => {
    SpeechRecognition.startListening({ language: lang });
  };

//Слушатель сабмитит результат голосового набора
  recognizeEvents.onspeechend = function (event) {
    handleSubmit(event);
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
