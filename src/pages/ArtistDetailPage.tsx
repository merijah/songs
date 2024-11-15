import { useParams } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail";
import { useEffect, useState } from "react";
import { IArtist } from "../models/artists";
// import { mapArtistObject } from "./ArtistsPage";
import { EndPoints } from "../api/endPoints";

const ArtistDetailPage = () => {
    const {id} = useParams();
    const [artist, setArtist] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch(`${EndPoints.getArtistByIdUrl}/${id}`)
            .then((response) => {
                response.json()
                        .then((data) => setArtist(data.data))
                        .catch((error) => console.log(error))
            })
            .catch((error) => {});
        setIsLoading(false);
    }, []);

    return (
        <>
            {isLoading ? <h1>Loading artist detail...</h1> : <ArtistDetail artist={artist}/>}
        </>
    )
}

export default ArtistDetailPage;