import './App.css'
import {Game} from './Game.jsx';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import {NavLink, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import {Home} from './Home.jsx';
import gameData from './assets/game-list.json';

function App() {
  //Array for list of Games
  {/** {
    index: 6,
    name: "Super Mario Sunshine",
    releaseDate: "2002",
    genre: "3D Action Platformer",
    collected : true
  }**/}
  const [gamesArray, setGamesArray] = useState(gameData);

  const {register, handleSubmit,  reset, formState: {errors}} = useForm();
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
    reset();
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
      {/******  Routes ******/}
      <Routes>
        <Route path="/" element={<Home duplicateFn={duplicateGame} deleteFn={deleteGame}/>}></Route>
        <Route path=":slug" element={<Game data={gamesArray}/>}></Route>
      </Routes>
    </>
  )
}

export default App
