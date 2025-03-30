import './App.css'
import Game from './Game.jsx'
import { useState } from 'react';
import {useForm} from 'react-hook-form';

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

  const {register, handleSubmit, formState: {errors}} = useForm();
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

  //Adds new game entry------------
  function addGame(data){
    console.log(data);
    let newGame = {
      index: gamesArray.length + 1,
      name: data.name,
      releaseDate: data.date,
      genre: data.genre,
      collected : false
    };
    if(data.owned === "owned"){
      newGame.collected = true;
    }
    setGamesArray([...gamesArray, newGame]);
  }

  return (
    <>
      <h1>GameCube Games</h1>
      <div>
        <form className = "new-game-form" onSubmit={handleSubmit(addGame)}>
          <fieldset className="input-form">
            <legend>Game Data</legend>
            <div className="form-group">
              <label htmlFor='name' className="required">Name</label>
              <input type="text" id="name" {...register("name", {required:true})}/>
            </div>
            {errors.name ? (<em className="error">Name Required</em>) : <></>}
            <div className="form-group">
              <label htmlFor='date' className="required">Release Date</label>
              <input type="text" id="date"{...register("date",  {required:true})}/>
            </div>
            {errors.date ? (<em className="error">Release Date Required</em>) : <></>}
            <div className="form-group">
              <label htmlFor='genre'>Genre</label>
              <select id="genre" {...register("genre")}>
              <option value="Action Platformer">Action Platformer</option>
              <option value="Fighting">Fighting</option>
              <option value="First-Person Shooter">First-Person Shooter</option>
              <option value="Third-Person Shooter">Third-Person Shooter</option>
              <option value="Survival Horror">Survival Horror</option>
              <option value="Simulation">Simulation</option>
              <option value="Role-Playing Game">Role-Playing Game</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor='owned'>
              Already own this game? <input type="checkbox" id="owned" value="owned" {...register("owned")}/>
              </label>
            </div>
            <button type="submit">Add Game</button>
          </fieldset>
        </form>
      </div>
      {/* --------------------- List of Games ----------------- */}
      <div className="games">
      <table>
        <thead>
          <tr>
        <th>Name</th>
        <th>Release Year</th>
        <th>Genre</th>
        <th>Collected</th>
        </tr>
        </thead>
        <tbody>
        {gamesArray.map((game) => {
          return (
              <Game key={game.index} index={game.index} name={game.name} 
              releaseDate={game.releaseDate} genre={game.genre} 
              collected={game.collected} dupFn={duplicateGame} deleteFn={deleteGame}
              />
          );
        })}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default App
