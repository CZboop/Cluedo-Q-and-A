import './App.css';
import DetectiveForm from './components/DetectiveForm';
import GuessForm from './components/GuessForm';
import QandA from './components/QandA';

function App() {
  const suspects = ['colonel mustard', 'professor plum', 'reverend green', 'mrs white', 'mrs peacock', 'miss scarlett'];
  const weapons = ['dagger', 'candlestick', 'revolver', 'rope', 'lead pipe', 'spanner'];
  const rooms = ['hall', 'lounge', 'dining room', 'kitchen', 'ball room', 'conservatory', 'billiard room', 'library', 'study'];

  let witness1 = "";
  let witness2 = "";
  let witness3 = "";
  let witness4 = "";

  const createScenario = () => {
    const murder = {'killer': suspects[~~(Math.random()*suspects.length)], 
    'weapon': weapons[~~(Math.random()*weapons.length)], 
    'room': rooms[~~(Math.random()*rooms.length)]};

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

    witness1 = witnesses[0];
    witness2 = witnesses[1];
    witness3 = witnesses[2];
    witness4 = witnesses[3];

  }
  // console.log(createScenario());
  createWitnessInfo();
  console.log(witness2 )

  return (
    <>
    <h1>Cluedo - Bot Interrogation</h1>
    <QandA name={"Witness #1"} info={witness1}/>
    <QandA name={"Witness #2"} info={witness2}/>
    <QandA name={"Witness #3"} info={witness3}/>
    <QandA name={"Witness #4"} info={witness4}/>
    <DetectiveForm />
    <GuessForm />
    </>
  )
}

export default App;
