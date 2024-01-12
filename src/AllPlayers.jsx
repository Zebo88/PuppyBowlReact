import React, { useEffect, useState } from "react";
import { getAllPlayers } from "./api";


export default function AllPlayers({ playerSelected, setPlayerSelected, playerId, setPlayerId }){
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    async function getPlayers(){
      const players = await getAllPlayers();
      setPlayerList(players);
    }
    getPlayers();

  },[]);

  return (
    <ul>
      {
        playerList.map((player, idx) => {
          return(          
          <li key={idx}>
            <h2>{player.name} #{player.id}</h2>
            <img src={player.imageUrl} alt={player.name} />
            <br />
            <button onClick={() => {
              setPlayerId(player.id);
              setPlayerSelected(true);
                }                
              }>
              Details
            </button>
          </li>)
        })
      }
    </ul>
  )
}