import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import React, {useState, useEffect, useRef} from 'react';
import './QandA.css'

const QandA =({name, info}) => {
  const [model, setModel] = useState("");
  const questionRef = useRef(null);
  const [answer, setAnswer] = useState("");

  const idk = ["I don't know", "I don't recall", "No comment", "I don't know anything about that",
  "I can't remember", "I can't help you answer that", "No idea", "Your guess is as good as mine"
];
  
  const loadModel = async () => {
    const qnaModel = await qna.load();
    setModel(qnaModel);
  }

  const answerQ = async (event) => {
    if (model !== null && event.which === 13){
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
      <h2>{name}</h2>
      {model == null ?
      <p>Loading...</p>
      :
      <>
      <p>Ask them a question</p>
      <input ref={questionRef} onKeyPress={answerQ} size='35'></input>
     
      {answer ?  
      <>
      {answer.length > 0 ?
      <>
       <h3>Answer</h3>
      {answer.slice(0,1).map((value) => {
        return (
        <>
        <p>{`${value.text}`}</p>
        </>
        )
      }) }
      </>
      :
      <h3>{idk[~~(Math.random()*idk.length)]}</h3>
    }
      </>
      : 
      
      ""}
      
      </>
    }
    </div>
  );
}

export default QandA;
