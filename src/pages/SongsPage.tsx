import React, { useEffect, useState } from 'react';
import SongTable from '../components/SongTable';
import songsdata from '../mock/songs.json';
import { ISong } from '../models/songs';
import { EndPoints } from '../api/endPoints';

const SongsPage = () => {
    const [song, setSong] = useState<ISong[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const fetchSong = () => {
        fetch(EndPoints.getSongsUrl)
        .then(Response => {
            Response.json().then((data) => {
                setSong(data.message)
            }
            )
        })
        .catch(err => {

        })
    }
    useEffect(() => {
        setIsLoading(true);
        setIsLoading(false);
        fetchSong();
    }, []);
    return (
        <SongTable songs={song} isloading={isLoading}  fetchSong={fetchSong}/>
    )
}
export default SongsPage;