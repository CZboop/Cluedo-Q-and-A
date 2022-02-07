import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import React, {useState, useEffect, useRef} from 'react';

const QandA =({name, info}) => {
  const [model, setModel] = useState("");
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState("");
  
  const loadModel = async () => {
    const qnaModel = await qna.load();
    setModel(qnaModel);
  }

  const answerQ = async (event) => {
    if (model !== null && event.which === 13){
      const question = questionRef.current.value;

      const answers = await model.findAnswers(question, info);
      console.log(answers)
      console.log(info)
      setAnswer(answers);
    }

  }

  useEffect(() => {
    loadModel();
  }, [])

  return (
    <div className="App">
      <h2>{name}</h2>
      {model == null ?
      <p>Loading...</p>
      :
      <>
      <p>Ask them a question about what they saw...</p>
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
