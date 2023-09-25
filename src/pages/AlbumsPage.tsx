import React, { useEffect, useState } from "react";
import AlbumTable from "../components/AlbumTable";
import albumsData from "../mock/album.json"
import { IAlbum } from "../models/albums";

const AlbumsPage = () => {
    const [album, setAlbum] = useState<IAlbum[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        if (albumsData) {
            setIsLoading(true);
            setAlbum(albumsData);
            setTimeout(() => setIsLoading(false), 4000);
        }
    }, [albumsData]);
 return (
        <AlbumTable albums={album} isLoading={isLoading} />
    )
}
export default AlbumsPage;