import { memo } from "react";
import { ISong } from "../models/songs";

export interface ISongDetailprops {
    song?:ISong
}

const SongDetail = (props:ISongDetailprops) => {
    const {song} = props;

    return(<div>
        {song ? <ul>
            <li>Id:{song.id}</li>
            <li>title:{song.title}</li>
            <li>duration: {song.duration}</li>
            <li>year: {song.year}</li>
            <li>author: {song.author}</li>
             </ul>: <h1>no data found</h1>}
    </div>
        
    )
}

export default memo (SongDetail, (oldSong: ISongDetailprops, newSong:ISongDetailprops)  => oldSong.song?.id===newSong.song?.id);