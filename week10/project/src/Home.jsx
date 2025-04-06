import {NavLink} from "react-router-dom";
import gameData from "./assets/game-list.json";
export function Home(duplicateFn, deleteFn){
   
    return(
        <div>
            <h1>Game List</h1>
            {gameData.map((game)=>{
             return(   
             <div key={game.slug}>
                <NavLink to={`${game.slug}`}><p><strong>{game.name} ({game.releaseDate})</strong></p></NavLink>
                <button onClick = {() => {duplicateFn(game.name)}
          }>Duplicate</button>
            <button onClick = {() => {deleteFn(game.name)}
          }>Delete</button>
             </div>
             )
            })}
        </div>
    )
}