import './App.css'
import Game from './Game.jsx'
import { useState } from 'react';

function App() {
  //Array for list of Games
  const [gamesArray, setGamesArray] = useState([
  {
    index: 1,
    name: "Luigi's Mansion",
    releaseDate: "2001",
    genre: "3D Action Platformer",
    collected : false
  },

  {
    index: 2,
    name: "Super Smash Bros. Melee",
    releaseDate: "2001",
    genre: "Fighter",
    collected : false
  },

  {
    index: 3,
    name: "Metroid Prime",
    releaseDate: "2002",
    genre: "First-Person Shooter",
    collected : false
  },

  {
    index: 4,
    name: "The Legend of Zelda: Wind Waker",
    releaseDate: "2002",
    genre: "3D Action Platformer",
    collected : false
  },

  {
    index: 5,
    name: "Pikmin",
    releaseDate: "2001",
    genre: "Adventure RTS",
    collected : false
  },
  
  {
    index: 6,
    name: "Super Mario Sunshine",
    releaseDate: "2002",
    genre: "3D Action Platformer",
    collected : true
  }
  ]);
  //remove game entry from list
  function deleteGame(name) {
    const updatedArray = gamesArray.filter((game) => {
      return game.name !== name;
    });
    setGamesArray(updatedArray);
  }
  //duplicate game entry and add to end of list
  function duplicateGame(name){
    const matchingGame = gamesArray.find((game) => {
      return game.name === name;
    });
    //matchingGame.index = gamesArray.length;
    setGamesArray([...gamesArray, matchingGame]);
  }

  return (
    <>
      <h1>GameCube Games</h1>
      <div className="games">
      <table>
        <tr>
        <th>Name</th>
        <th>Release Year</th>
        <th>Genre</th>
        <th>Collected</th>
        </tr>
        {gamesArray.map((game) => {
          return (
              <Game index={game.index} name={game.name} 
              releaseDate={game.releaseDate} genre={game.genre} 
              collected={game.collected} dupFn={duplicateGame} deleteFn={deleteGame}
              />
          );
        })}
      </table>
      </div>
    </>
  )
}

export default App
