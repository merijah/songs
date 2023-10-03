import { memo } from "react";
import { IArtist } from "../models/artists";

export interface IArtistDetailProps{
    artist?: IArtist
}
const ArtistDetail = (props: IArtistDetailProps) => {
    const {artist} = props;

    /**
     * create local state for artist
     * fetch artist data by id
     * if success, assign the result to artist state
     * else display a message that shows there is no artist with the selected id
     */
    console.log("child rendering")
    return (<div>
            {artist ? <ul>
                <li>Id: {artist.id}</li>
                <li>First Name: {artist.firstName }</li>
                <li>Last Name: {artist.lastName }</li>
                <li>Country: {artist.country}</li>
                <li>About: {artist.about}</li>
            </ul> : <h1>No data found</h1>}
        </div>)
}

const areEqual = (oldProp: IArtistDetailProps, newProp: IArtistDetailProps): boolean => {
    return oldProp.artist?.id === newProp.artist?.id;
}
export default memo(ArtistDetail, areEqual);