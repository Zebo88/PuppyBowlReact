import React, { useEffect, useState } from "react";
import { getAllPlayers, removePlayer } from "./api";

export default function AllPlayers({ playerSelected, setPlayerSelected, playerId, setPlayerId, playerAdded, setPlayerAdded }){
  const [playerList, setPlayerList] = useState([]);
  const [playerRemoved, setPlayerRemoved] = useState(false);

  useEffect(() => {
    async function getPlayers(){
      const players = await getAllPlayers();
      setPlayerList(players);
      setPlayerRemoved(false);
    }
    getPlayers();

  },[playerRemoved, playerAdded]);

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
            <button onClick={() => {
              removePlayer(player.id);
              setPlayerRemoved(true);
            }}>
              Remove
            </button>
          </li>)
        })
      }
    </ul>
  )
}