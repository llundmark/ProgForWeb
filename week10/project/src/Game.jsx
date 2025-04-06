import CheckMark from "./assets/check-solid.svg"
import XMark from "./assets/xmark-solid.svg"
import {NavLink, useParams} from "react-router-dom";
export function Game({data}) {
  //returns a row for 'Games' table.
  const {slug} = useParams();
  const selectedGame = data.find((game) => game.slug === slug);
    return (
      <div>
        <nav>
          <NavLink to="/">Back</NavLink>
        </nav>
        <h2>Game Details</h2>
        <h3>Title: {selectedGame.name}</h3>
        <p>Release Date: {selectedGame.releaseDate}</p>
        <p>Genre: {selectedGame.genre}</p>
        <p>Collected: 
          <img className="icon" src={selectedGame.collected ? CheckMark : XMark} alt="collected or not"/></p>
      </div>
    )
  }