import {memo} from "react";
import { IAlbum } from "../models/albums"

export interface IAlbumDetailprops {
    album : IAlbum | undefined;
}
const AlbumDetail = (props: IAlbumDetailprops) => {
    const  {album} = props;

    return ( <div>
        {album ? <ul>
            <li>Id: {album.id}</li>
            <li>name: {album.name}</li>
            <li>year: {album.year}</li>
            <li>duration: {album.duration}</li>
        </ul> : <h1>no data found</h1>}
    </div>

    )
 
}

const areEqual = (oldAlbum: IAlbumDetailprops, newAlbum: IAlbumDetailprops): boolean => oldAlbum.album?.id === newAlbum.album?.id;

export default memo(AlbumDetail, areEqual);