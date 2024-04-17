import React, { useEffect, useState } from "react";
import AlbumTable from "../components/AlbumTable";
// import albumsData from "../mock/album.json"
import { IAlbum } from "../models/albums";
import { EndPoints } from "../api/endPoints";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState<IAlbum[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchAlbum = () => {
        fetch(EndPoints.getAlbumsUrl)
            .then(Response => {
             Response.json().then((data) => {
                setAlbums(data.message)
                // const _albums: IAbum[] = data;
                // setAlbums(_albums)
             }
          )
            })
            .catch(err => {

            });
    }
    useEffect(() => {
    setIsLoading(true);
    fetchAlbum();
    setIsLoading(false);

    }, []);
 return (
        <AlbumTable albums={albums} isLoading={isLoading} fetchAlbum={fetchAlbum}/>
    )
}
export default AlbumsPage;

