import './App.css';
import DetectiveForm from './components/DetectiveForm';
import GuessForm from './components/GuessForm';
import QandA from './components/QandA';
import React, {useState, useEffect} from 'react';

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
    console.log(murder)
    return murder;
  }

  const createWitnessInfo = () => {
    const murder = createScenario();
    const killer = murder.killer;
    const weapon = murder.weapon;
    const room = murder.room;

    let witnesses = "on the night in question. s0 was locked in the r0 alone all night so they must be innocent, and I am \
    completely sure of that 100%. Guests arrived at around 6pm. s1 entered the r1 at 6.30 and stayed there working on their laptop \
    from then on. the murder took place after midnight. the w0 barely moved all night, the w0 fell under \
    the table hours before the murder and then stayed there until morning. the w1 could not have been the murder weapon, \
    because it was thrown out of the window into a passing truck well before the murder took place *\
    it was such a shame to ruin a lovely evening. s2 ended up leaving early, yes s2 left around 10pm. \
    the other guests seemed to be having fun. \
    there was talk of a seance but that does not seem to have had anything to do with the murder. the r2 \
    was empty the whole time. the door to the r2 had been locked by the host before the party started, and it stayed locked. \
    the w2 was being used as a paperweight for some important documents, so no one touched the w2. the only time the r3 \
    was used was when the entire group had drinks there after everyone arrived. so the r3 was not the murder scene *\
    the police had been called after an argument. at the time of the murder the police were in the r4. \
    the r5 was sealed off at around 11.30pm, after a skunk entered it. at the time of the murder, the r5 was \
    still heavily barricaded. s3 had to take a call around ten minutes before the murder, and was in their car on the phone \
    when the victim was killed. s3 was holding the w3 when they got the call, and took it to the car with them while \
    the murder took place. *\
    the r6 was under close surveillance all night, and it was only used as a cloakroom. s4 fell asleep after dinner and \
    only woke up after the murder. the w4 was accidentally incinerated before the murder. r7 was sealed off for a previous \
    murder and no one could enter";

    let innocentSuspects = suspects.filter(sus => sus !== killer);
    console.log(innocentSuspects)
    let i = 0;
    while (innocentSuspects.length > 0){
      console.log(i);
      let currentSus = innocentSuspects[~~(Math.random()*innocentSuspects.length)]
      witnesses = witnesses.replaceAll( `s${i}`, currentSus)
      innocentSuspects = innocentSuspects.filter(sus => sus !== currentSus);
      i++;
    }

    let innocentWeapons = weapons.filter(wep => wep !== weapon);
    i = 0;
    while (innocentWeapons.length > 0){
      console.log(i);
      let currentWep = innocentWeapons[~~(Math.random()*innocentWeapons.length)]
      witnesses = witnesses.replaceAll( `w${i}`, currentWep)
      innocentWeapons = innocentWeapons.filter(wep => wep !== currentWep);
      i++;
    }
    // console.log(witnesses)

    let innocentRooms = rooms.filter(rm => rm !== room);
    i = 0;
    while (innocentRooms.length > 0){
      console.log(i);
      let currentRoom = innocentRooms[~~(Math.random()*innocentRooms.length)]
      witnesses = witnesses.replaceAll( `r${i}`, currentRoom)
      innocentRooms = innocentRooms.filter(rm => rm !== currentRoom);
      i++;
    }
    console.log(witnesses)

    const witnessSplit = witnesses.split("*")

    setWitness1(witnessSplit[0]);
    setWitness2(witnessSplit[1]);
    setWitness3(witnessSplit[2]);
    setWitness4(witnessSplit[3]);
    
    console.log("witness 3: " + witness3);

  }

  useEffect(() => {
    createWitnessInfo();
  }, [])
  
  return (
    <>
    <h1>CLUEDO</h1>
    <h2 className='subheading'>Interrogation</h2>
    <h3 className='intro'>A murder took place at a recent party. There were four smart cameras in operation. 
      Their video was wiped, but they may still remember some details...</h3>

    <div className='witness-container'>
      <QandA name={"Witness #1"} info={witness1}/>
      <QandA name={"Witness #2"} info={witness2}/>
      <QandA name={"Witness #3"} info={witness3}/>
      <QandA name={"Witness #4"} info={witness4}/>
    </div>
    <DetectiveForm />
    <GuessForm murder={murder}/>
    </>
  )
}

export default App;
