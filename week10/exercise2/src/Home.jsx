import {NavLink} from "react-router-dom";
import musicData from "./music-list.json";
export function Home(){
    return(
        <div>
            <h1>Music List</h1>
            {musicData.map((song)=>{
             return(   
             <div key={song.slug}>
                <img src={song.cover} alt={song.title}/>
                <NavLink to={`${song.slug}`}><p><strong>{song.title} by {song.artist}</strong></p></NavLink>
             </div>
             )
            })}
        </div>
    )
}