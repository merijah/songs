import React, { useEffect, useState } from "react";
import AlbumTable from "../components/AlbumTable";
// import albumsData from "../mock/album.json"
import { IAlbum } from "../models/albums";
import { EndPoints } from "../api/endPoints";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
    setIsLoading(true);
     fetch(EndPoints.getAlbumsUrl)
            .then(Response => {
             Response.json().then((data) => {
                setAlbums(data)
                // const _albums: IAbum[] = data;
                // setAlbums(_albums)
             }
                
             )
            })
            .catch(err => {

            })

    setIsLoading(false);

    }, []);
 return (
        <AlbumTable albums={albums} isLoading={isLoading} />
    )
}
export default AlbumsPage;
