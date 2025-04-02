import {NavLink, useParams} from "react-router-dom";
import PropTypes from 'prop-types';
export function Song({data}){
    const {slug} = useParams();
    const selectedSong = data.find((song) => song.slug === slug);
    return(
        <div>
            {/******  Navigation ******/}
        <nav>
        <NavLink to="/">Back</NavLink>
        </nav>
        <h2>Song Details</h2>
        <h3>Title: {selectedSong.title}</h3>
        <p>Artist: {selectedSong.artist}</p>
        <img src={selectedSong.cover} alt={selectedSong.title}/>
        <p>Rank: {selectedSong.rank}</p>
        </div>
    )
}

Song.proptypes = {
    data: PropTypes.arrayOf(PropTypes.any)
}