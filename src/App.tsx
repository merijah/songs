import React, { useEffect, useState } from 'react';
import ArtistTable from './components/ArtistTable';
import artistsData from './mock/artists.json';
import { IArtist } from './models/artists';


import AlbumTable from './components/AlbumTable';
import albumsData from './mock/album.json';
import { IAlbum } from './models/albums';

import SongTable from './components/SongTable';
import songsdata from './mock/songs.json';
import { ISong } from './models/songs';


function App() {
  const [album, setAlbum] = useState<IAlbum[]>([])
  const [artists, setArtists] = useState<IArtist[]>([])
  const [song, setSong] = useState<ISong[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mapObject = (obj: { id?: number, firstname: string, lastname: string, country: string, about: string }[]): IArtist[] => {
    // const result: IArtist[] = [];

    // for(let i = 0; i < obj.length; i++){
    //     const val = {
    //         firstName: obj[i].firstname,
    //         lastName: obj[i].lastame,
    //         id: obj[i].id,
    //         country: obj[i].country,
    //         about: obj[i].about
    //     };
    //     result.push(val);
    // }

    // for(const c of obj){
    //     const val = {
    //         firstName: c.firstname,
    //         lastName: c.lastame,
    //         id: c.id,
    //         country: c.country,
    //         about: c.about
    //     };
    //     result.push(val);
    // }

    // obj.forEach((c) => {
    //     const val = {
    //         firstName: c.firstname,
    //         lastName: c.lastame,
    //         id: c.id,
    //         country: c.country,
    //         about: c.about
    //     };

    //     result.push(val);
    // });

    const result: IArtist[] = obj.map((c) => {
      return {
        firstName: c.firstname,
        lastName: c.lastname,
        id: c.id,
        country: c.country,
        about: c.about
      }
    })
    return result;
  }
  useEffect(() => {
    if (albumsData) {
      setIsLoading(true);
      setAlbum(albumsData);
      setTimeout(() => setIsLoading(false), 4000);
    }
  }, [albumsData]);

  useEffect(() => {
    if (artistsData) {
      setIsLoading(true);
      const _artists: IArtist[] = mapObject(artistsData);
      setArtists(_artists);
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [artistsData]);

  useEffect(() => {
    if (songsdata) {
      setIsLoading(true);
      setSong(songsdata);
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [songsdata]);

  return (
    <div>
      <h1>Welcome</h1>
      <ArtistTable artists={artists} isLoading={isLoading} />
      <AlbumTable albums={album} isLoading={isLoading} />
      <SongTable songs={song} isloading={isLoading} />

    </div>
  );
}
export default App;

