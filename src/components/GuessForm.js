import React, {useState, useEffect, useRef} from 'react';

const GuessForm = ({murder}) => {
    const [killerGuess, setKillerGuess] = useState(null);
    const [weaponGuess, setWeaponGuess] = useState(null);
    const [roomGuess, setRoomGuess] = useState(null);

    const handleGuessSubmit = (e) => {
        e.preventDefault();
        
        const guess = {
            'killer': killerGuess, 
            'weapon': weaponGuess, 
            'room': roomGuess};
        if (guess==murder){
            console.log("correct");
        }
        else {
            console.log("incorrect");
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
            <option>Dagger</option>
            <option>Candlestick</option>
            <option>Revolver</option>
            <option>Rope</option>
            <option>Lead Pipe</option>
            <option>Spanner</option>
        </select>

        <label>Room: </label>
        
        <select onChange={handleRoomChange}>
            <option value="">~~~Select a room~~~</option>
            <option>Hall</option>
            <option>Lounge</option>
            <option>Dining Room</option>
            <option>Kitchen</option>
            <option>Ball Room</option>
            <option>Conservatory</option>
            <option>Billiard Room</option>
            <option>Library</option>
            <option>Study</option>
        </select>
        <input type="submit"></input>
        </form>
        </>

    )
}

export default GuessForm;