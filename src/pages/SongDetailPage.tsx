import { useEffect, useState } from "react";
import { ISong } from "../models/songs";
import { useParams } from "react-router-dom";
import { EndPoints } from '../api/endPoints';
import SongDetail from "../components/SongDetail";

const SongDetailPage = () => {
    const { id } = useParams();
    const [song, setSongs] = useState<ISong | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(`${EndPoints.getSongsByIdUrl}/${id}`)
            .then((response) => {
                response.json()
                    .then(data => setSongs(data))
                    .catch(error => console.log(error))

            }
            ).catch(error => console.log(error))
    }, [])

    return (
        <SongDetail song={song} />
        )
           
}

        export default SongDetailPage;