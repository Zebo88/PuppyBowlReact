import { useState } from 'react'
import './App.css'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer';
import AddPlayerForm from './PlayerForm';


function App() {
  const [playerSelected, setPlayerSelected] = useState(false);
  const [playerId, setPlayerId] = useState(null);
  const [playerAdded, setPlayerAdded] = useState(false);

  return (
    <>
    <AddPlayerForm 
      playerAdded={playerAdded}
      setPlayerAdded={setPlayerAdded}
    />
    {!playerSelected && 
      <AllPlayers 
      playerId={playerId}
      setPlayerId={setPlayerId}
      playerSelected={playerSelected} 
      setPlayerSelected={setPlayerSelected}
      playerAdded={playerAdded}
      setPlayerAdded={setPlayerAdded}
      />
    }
    {playerSelected &&
      <SinglePlayer 
        playerId={playerId}
        setPlayerId={setPlayerId}
        playerSelected={playerSelected} 
        setPlayerSelected={setPlayerSelected}
      />
    }
      
    </>
  )
}

export default App
