import './App.css';
import DetectiveForm from './components/DetectiveForm';
import GuessForm from './components/GuessForm';
import QandA from './components/QandA';
import React, {useState, useEffect, useRef} from 'react';

function App() {
  const suspects = ['colonel mustard', 'professor plum', 'reverend green', 'mrs white', 'mrs peacock', 'miss scarlett'];
  const weapons = ['dagger', 'candlestick', 'revolver', 'rope', 'lead pipe', 'spanner'];
  const rooms = ['hall', 'lounge', 'dining room', 'kitchen', 'ball room', 'conservatory', 'billiard room', 'library', 'study'];

  const [witness1, setWitness1] = useState("");
  const [witness2, setWitness2] = useState("");
  const [witness3, setWitness3] = useState("");
  const [witness4, setWitness4] = useState("");

  const [murder, setMurder] = useState(null);

  const createScenario = () => {
    const murder = {'killer': suspects[~~(Math.random()*suspects.length)], 
    'weapon': weapons[~~(Math.random()*weapons.length)], 
    'room': rooms[~~(Math.random()*rooms.length)]};
    setMurder(murder);
    return murder;
  }

  const createWitnessInfo = () => {
    const murder = createScenario();
    const killer = murder.killer;
    const weapon = murder.weapon;
    const room = murder.room;

    const witnesses = ["", "", "", ""];

    for (let i=0; i<suspects.length; i++){
      if (suspects[i]!=killer){
        witnesses[~~(Math.random()*witnesses.length)] += ` ${suspects[i]} was with me the entire night! `
        
      }
    }
    for (let i=0; i<rooms.length; i++){
      if (rooms[i]!=room){
        witnesses[~~(Math.random()*witnesses.length)] += ` I was in the ${rooms[i]} and it definitely didn't happen there `
      }
    }
    for (let i=0; i<weapons.length; i++){
      if (weapons[i]!=weapon){
        witnesses[~~(Math.random()*witnesses.length)] += ` I was the only one that used the ${weapons[i]} so it wasn't the murder weapon `
      }
    }

    setWitness1(witnesses[0]);
    setWitness2(witnesses[1]);
    setWitness3(witnesses[2]);
    setWitness4(witnesses[3]);

  }

  useEffect(() => {
    createWitnessInfo();
  }, [])
  
  return (
    <>
    <h1>Cluedo - Bot Interrogation</h1>
    <QandA name={"Witness #1"} info={witness1}/>
    <QandA name={"Witness #2"} info={witness2}/>
    <QandA name={"Witness #3"} info={witness3}/>
    <QandA name={"Witness #4"} info={witness4}/>
    <DetectiveForm />
    <GuessForm murder={murder}/>
    </>
  )
}

export default App;
