import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import React, {useState, useEffect, useRef} from 'react';

const QandA =() => {
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
    if (model !== null && event.which === 13){
      console.log("submitted")
      const info = infoRef.current.value;
      const question = questionRef.current.value;

      const answers = await model.findAnswers(question, info);
      console.log(answers)
      setAnswer(answers);
    }

  }

  useEffect(() => {
    loadModel();
  }, [])

  return (
    <div className="App">
      <h1>Question and Answer Bot</h1>
      {model == null ?
      <p>Loading...</p>
      :
      <>
      <p>Give it some information about yourself</p>
      <textarea ref={infoRef} cols="120" rows="20"></textarea>
      <p>Now ask it a question...</p>
      <input ref={questionRef} onKeyPress={answerQ}></input>
     
      {answer ?  
      <>
       <h3>Top Answers</h3>
      {answer.slice(0,3).map((value, count) => {
        return (
        <>
        <p>{`Answer ${count + 1}: ${value.text}`}</p>
        </>
        )
      }) }
      </>
      : 
      
      ""}
      
      </>
    }
    </div>
  );
}

export default QandA;
