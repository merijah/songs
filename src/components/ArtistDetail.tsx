import { memo } from "react";
import { IArtist } from "../models/artists";
import React from "react";

export interface IArtistDetailProps{
    artist?: IArtist
}
const ArtistDetail: React.FC<IArtistDetailProps> = ({artist}) => {

    /**
     * create local state for artist
     * fetch artist data by id
     * if success, assign the result to artist state
     * else display a message that shows there is no artist with the selected id
     */
    console.log(artist)
    return (<div>
            {artist ? <ul>
                <li>First Name: {artist.firstName }</li>
                <li>Last Name: {artist.lastName }</li>
                <li>Country: {artist.country}</li>
                <li>About: {artist.about}</li>
            </ul> : <h1>No data found</h1>}
        </div>)
}

const areEqual = (oldProp: IArtistDetailProps, newProp: IArtistDetailProps): boolean => {
    return oldProp.artist?._id === newProp.artist?._id;
}
export default memo(ArtistDetail, areEqual);