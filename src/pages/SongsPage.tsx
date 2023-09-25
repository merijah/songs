import React, { useEffect, useState } from 'react';
import SongTable from '../components/SongTable';
import songsdata from '../mock/songs.json';
import { ISong } from '../models/songs';

const SongsPage = () => {
    const [song, setSong] = useState<ISong[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        if (songsdata) {
            setIsLoading(true);
            setSong(songsdata);
            setTimeout(() => setIsLoading(false), 3000);
        }
    }, [songsdata]);
    return (
        <SongTable songs={song} isloading={isLoading} />
    )
}
export default SongsPage;