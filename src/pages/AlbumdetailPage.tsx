import { useState, useEffect } from 'react';
import AlbumDetail from "../components/AlbumDetail";
import { IAlbum } from "../models/albums";
import { useParams } from "react-router-dom"
import { EndPoints } from '../api/endPoints';



const AlbumDetailPage = () => {
    const { id } = useParams();
    const [album, setAlbums] = useState<IAlbum | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(`${EndPoints.getAlbumByIdUrl}/${id}`)
        .then((response) => {
            response.json()
               .then(data => setAlbums(data))
               .catch(error => console.log(error))

        }
        ).catch(error => console.log(error))
    }, []    )

    return <AlbumDetail album={album} />

}

export default AlbumDetailPage;
