import { useEffect, useState } from "react";
import UpdateArtistForm from "../components/ArtistUpdateForm";
import { useParams } from 'react-router-dom';
import { IArtist } from "../models/artists";
import { EndPoints } from "../api/endPoints";

const UpdateArtistPage = () => {
    const params = useParams();
    const { id } = params;
    
    const [artist, setArtist] = useState<IArtist | undefined>(undefined);

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
        <>{artist?._id === undefined ? <div>There is no artist with the provided id</div> : <UpdateArtistForm artist={artist}/>}</>
        );
}

export default UpdateArtistPage;