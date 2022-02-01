import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import React, {useState, useEffect, useRef} from 'react';

function App() {
  const [model, setModel] = useState("");
  const infoRef = useRef(null);
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState("");
  
  const loadModel = async () => {
    const qnaModel = await qna.load();
    setModel(qnaModel);
    // console.log(model)
  }

  const answerQ = async (event) => {
    if (model !== null && event.keyCode === '13'){
      console.log("submitted")
      const info = infoRef.current.value;
      const question = questionRef.current.value;

      const answers = await model.findAnswers(question, info);
      setAnswer(answers);
    }

  }

  useEffect(() => {
    loadModel();
  }, [])

  return (
    <div className="App">
      <h1>Question and Answer Bot</h1>
    </div>
  );
}

export default App;
