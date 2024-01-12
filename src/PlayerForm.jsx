import React, { useState } from "react";
import { addPlayer } from "./api";

export default function AddPlayerForm(){
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const [teamId, setTeamId] = useState("");
  const [imgURL, setImgURL] = useState("");
  // const [error, setError] = useState(null);

  async function handleSubmit(event){
    event.preventDefault();

    addPlayer(playerName, playerBreed, teamId, imgURL);
    // document.getElementsByClassName("form").reset();
  };
  
  return (
    <>
      <h2>Add Player to Roster</h2>
      {/* { error && <p>{ error }</p>} */}

      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            id="name" 
            type="text" 
            value={ playerName } 
            onChange={ (e) => setPlayerName(e.target.value) }
          />
        </label>
        <br/>
        <label>
          Breed:
          <input 
            id="PW" 
            type="text"
            value={ playerBreed } 
            onChange={ (e) => setPlayerBreed(e.target.value)}
           />
        </label>
        <label>
          Team ID:
          <input 
            id="PW" 
            type="text"
            value={ teamId } 
            onChange={ (e) => setTeamId(e.target.value)}
            placeholder="1 or 2"
           />
        </label>
        <label>
          Image URL:
          <input 
            id="URL" 
            type="text"
            value={ imgURL } 
            onChange={ (e) => setImgURL(e.target.value)}
           />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}