import './App.css';
import DetectiveForm from './components/DetectiveForm';
import GuessForm from './components/GuessForm';
import QandA from './components/QandA';

function App() {

  const createScenario = () => {
    const suspects = ['colonel mustard', 'professor plum', 'reverend green', 'mrs white', 'mrs peacock', 'miss scarlett'];
    const weapons = ['dagger', 'candlestick', 'revolver', 'rope', 'lead pipe', 'spanner'];
    const rooms = ['hall', 'lounge', 'dining room', 'kitchen', 'ball room', 'conservatory', 'billiard room', 'library', 'study'];
    // return the killer, weapon, room etc
    // then from there can have another method that creates what witnesses saw, 
    // excluding the killer or summat incriminating 4 them 
    const murder = {'killer': suspects[~~Math.random()*suspects.length], 
    'weapon': weapons[~~Math.random()*weapons.length], 
    'room': rooms[~~Math.random()*rooms.length]};

    return murder;
  }

  const createWitnessInfo = () => {
    const murder = createScenario();
    const killer = murder.killer;
    const weapon = murder.weapon;
    const room = murder.room;

    
  }
  // console.log(createScenario());

  // used wiki random article to get some placeholder info for initial experiments
  const witness1 = `Rose's costume design career began in the West End theatres of London,[2] following time spent on various theatre projects as a teenager in Windsor. She studied stage management while attending the London Academy of Music and Dramatic Art. Due to her fluency in Italian, she acquired a job as an assistant and buyer for the high fashion label Fiorucci in Milan, which introduced her to important people in the fashion and film industries.[3]

  One of her first film collaborations was with the director Alan Parker, when they worked together on the 1982 film Pink Floyd – The Wall. She again joined Parker on his directional projects The Road to Wellville (1994) and Evita (1996). Also in 1996, she served as the costume designer for Mission: Impossible, her first major action film in a career with many of them; by 2010, Rose was described by Deborah Nadoolman Landis as being a "recognized master of the epic."[2] For the 2004 film King Arthur, another large-budget production, Rose designed costumes that evoked "fifth-century rock stars".[4]
  
  Rose began her collaboration with the director Gore Verbinski in Pirates of the Caribbean: The Curse of the Black Pearl (2003). To craft the look of Jack Sparrow (Johnny Depp), she drew inspiration from the illustrator Howard Pyle.[5] Nadoolman Landis describes Rose's design for Depp as "the iconic prototype for pirate wear, reviving a long-dead genre."[2] Rose returned to work on the second and third films in the Pirates series, Dead Man's Chest (2006) and At World's End (2007), which were filmed simultaneously.[5] Rose also worked on On Stranger Tides (2011) and Dead Men Tell No Tales (2017). Rose again served as costume designer on another Depp film, The Lone Ranger (2013).[6] For 47 Ronin (2013), she oversaw the production of 998 costumes and 400 suits of armour.[7]
  
  Rose received her first Emmy nomination for the 2010 miniseries The Pacific.[8] She has been nominated for the BAFTA Award for Best Costume Design three times: for the films Evita (1996), Pirates of the Caribbean: The Curse of the Black Pearl (2003), and Pirates of the Caribbean: Dead Man's Chest (2006).[9]`
  
  const witness2 = `
  He was born in the neighborhood of Verdum. A sympathizer of the Labor Party of Spain in his youth, he graduated in Law from the Autonomous University of Barcelona in 1981 and has been a Social Security lawyer since 1989. In 2000, he was elected president of the Professional Association from the Department of Social Security Administration (APLASS), a post he held until 2006. He has also been part of the Boards of Directors of the Spanish Association of Health and Social Security (AESSS) and of the Federation of Superior Bodies of the Civil Administration of the State (FEDECA).

In 1995 he joined the Association for the Tolerance of Barcelona, from which he was elected vice president and coordinated different initiatives, such as the Tolerance Magazine, the legal section of the Association and the Tolerance Film Cycle. In 2006 he resigned the vice president of the entity to devote himself entirely to political activity.

Since 2005, from the group that promoted the platform (and later association) Ciutadans de Catalunya, he participated in the creation of the Ciutadans-Partit de la Ciutadania (C's) party, as part of the first Executive Committee elected to the Founding Congress of C's, in July 2006 and being the most voted candidate for the General Council of the party at the II National Congress of C's (2007).

In the elections to the 2006 Parliament of Catalonia, he was elected deputy for the province of Barcelona in the list of C's, being assigned to the Mixed Group, of which he was Deputy Spokesman.[1] He was a member of the executive committee of Citizens and wrote part of the appeal of unconstitutionality (admitted to proceeding) that was presented, on behalf of the party, against the Statute of Autonomy of Catalonia of 2006.[2]
  `
  
  return (
    <>
    <h1>Cluedo - Bot Interrogation</h1>
    <QandA name={"Witness #1"} info={witness1}/>
    <QandA name={"Witness #2"} info={witness2}/>
    <QandA name={"Witness #3"}/>
    <DetectiveForm />
    <GuessForm />
    </>
  )
}

export default App;
