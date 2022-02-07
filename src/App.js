import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna';
import React, {useState, useEffect, useRef} from 'react';
import QandA from './components/QandA';

function App() {
  
  return (
    <>
    <QandA />
    <QandA />
    <QandA />
    </>
  )
}

export default App;
