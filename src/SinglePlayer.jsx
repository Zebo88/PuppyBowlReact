import React, { useEffect, useState } from "react";
import { getSinglePlayer } from "./api";


export default function SinglePlayer({ playerSelected, setPlayerSelected, playerId, setPlayerId }){
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    async function getPlayer(){
      const singlePlayer = await getSinglePlayer(playerId);
      setPlayer(singlePlayer);
    }
    getPlayer();

  },[]);

  return (
    <ul>
      {        
        <li key={player.id}>
          <h2>{player.name} #{player.id}</h2>
          <p>{player.breed}</p>
          <p>{player.status}</p>
          <p>{player.teamId}</p>
          <img src={player.imageUrl} alt={player.name} />
          <br />
          <button onClick={() => {
            setPlayerSelected(false);
            // setPlayerId(null);//This probably isn't needed, so I'm excluding.
            }
          }>
            Return
          </button>
        </li>
      }
    </ul>
  )
}