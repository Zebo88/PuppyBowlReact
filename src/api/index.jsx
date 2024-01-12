import React from "react";

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
export async function addPlayer(playerName, playerBreed, teamId, imgUrl){

  try {
      const response = await fetch(API_URL, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
              name: playerName,
              breed: playerBreed,
              teamId: teamId,
              imageUrl: imgUrl,
          })
      });

      if (!response.ok){
          throw new Error("Failed to create player!")
      }

      getAllPlayers();

  } catch (err) {
      console.error('Oops, something went wrong with adding that player!', err);
  }
}