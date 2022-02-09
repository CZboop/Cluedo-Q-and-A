import React, {useState, useEffect, useRef} from 'react';

const GuessForm = ({murder}) => {
    const [killerGuess, setKillerGuess] = useState(null);
    const [weaponGuess, setWeaponGuess] = useState(null);
    const [roomGuess, setRoomGuess] = useState(null);
    const [guessResult, setGuessResult] = useState("");

    const handleGuessSubmit = (e) => {
        e.preventDefault();

        const guess = {
            'killer': killerGuess, 
            'weapon': weaponGuess, 
            'room': roomGuess};
        if (guess.killer==murder.killer && guess.weapon==murder.weapon && guess.room==murder.room){
            setGuessResult("Correct!");
        }
        else {
            setGuessResult("Incorrect");
        }
    }

    const handleKillerChange = (e) => {
        setKillerGuess(e.target.value)
    }

    const handleWeaponChange = (e) => {
        setWeaponGuess(e.target.value)
    }

    const handleRoomChange = (e) => {
        setRoomGuess(e.target.value)
    }

    return (
     
        <>
        <form onSubmit={handleGuessSubmit}>
        <h2>J'Accuse</h2>
        <label>Killer: </label>
        <select onChange={handleKillerChange}>
            <option value="">~~~Select a suspect~~~</option>
            <option value="colonel mustard">Colonel Mustard</option>
            <option value="professor plum">Professor Plum</option>
            <option value="reverend green">Reverend Green</option>
            <option value="mrs peacock">Mrs Peacock</option>
            <option value="miss scarlett">Miss Scarlett</option>
            <option value="mrs white">Mrs White</option>
        </select>

        <label>Weapon: </label>
        <select onChange={handleWeaponChange}>
            <option value="">~~~Select a weapon~~~</option>
            <option value="dagger">Dagger</option>
            <option value="candlestick">Candlestick</option>
            <option value="revolver">Revolver</option>
            <option value="rope">Rope</option>
            <option value="lead pipe">Lead Pipe</option>
            <option value="spanner">Spanner</option>
        </select>

        <label>Room: </label>
        
        <select onChange={handleRoomChange}>
            <option value="">~~~Select a room~~~</option>
            <option value="hall">Hall</option>
            <option value="lounge">Lounge</option>
            <option value="dining room">Dining Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="ball room">Ball Room</option>
            <option value="conservatory">Conservatory</option>
            <option value="billiard room">Billiard Room</option>
            <option value="library">Library</option>
            <option value="study">Study</option>
        </select>
        <input type="submit"></input>
        </form>
        <h2>{guessResult}</h2>
        </>

    )
}

export default GuessForm;