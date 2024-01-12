import React from "react";
import getPlayers from "../AllPlayers";

const cohortName = '2309-ftb-et-web-pt';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2309-ftb-et-web-pt/players`;

//function to call api for all players
export async function getAllPlayers(){
  try {
    const response = await fetch(API_URL);
    const result = await response.json();

    return result.data.players;
  } catch (error) {
    console.error(error);
  }
}

//function to call api for one specific player
export async function getSinglePlayer(playerId){
  try {
    const response = await fetch(`${API_URL}/${playerId}`);
    const result = await response.json();

    return result.data.player;
    
  } catch (error) {
    console.error(error);
  }
}

//function to call api to post player
export async function addPlayer(playerName, playerBreed, teamId, playerStatus, imgUrl){

  try {
      const response = await fetch(API_URL, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
              name: playerName,
              breed: playerBreed,
              teamId: teamId,
              // status: playerStatus,
              imageUrl: imgUrl,
          })
      });

      if (!response.ok){
          throw new Error("Failed to create player!")
      }

  } catch (err) {
      console.error('Oops, something went wrong with adding that player!', err);
  }
}

export async function removePlayer(playerId){
  console.log(`Player selected for removal: id ${playerId}`);
  try {
    const response = await fetch(`${API_URL}/${playerId}`,{
      method: "DELETE",
    });
        //Check if the request was successful:
        if (!response.ok){
          throw new Error("Player could not be removed.")
      }

  } catch (error) {
    console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            error
        );
  }
}