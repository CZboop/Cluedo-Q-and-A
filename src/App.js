import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import React, {useState, useEffect} from 'react';

function App() {
  const [model, setModel] = useState("");
  const [info, setInfo] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
  const loadModel = async () => {
    const qnaModel = await qna.load();
    setModel(qnaModel);
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
