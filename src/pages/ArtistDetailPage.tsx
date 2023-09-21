import { useParams } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail";
import artistsData from'../mock/artists.json';
import { useEffect, useState } from "react";
import { IArtist } from "../models/artists";
import { mapArtistObject } from "./ArtistsPage";

const ArtistDetailPage = () => {
    const {id} = useParams();
    const [artist, setArtist] = useState<IArtist | undefined>(undefined);

    useEffect(() => {
        const result = artistsData.find(item => item.id.toString() === id);
        if (result) {
            setArtist(mapArtistObject(result));
        }
    }, []);
    return (
        <>
            <ArtistDetail artist={artist}/>
        </>
    )
}

export default ArtistDetailPage;