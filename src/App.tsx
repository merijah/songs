import React, { useEffect, useState } from 'react';
import ArtistTable from './components/ArtistTable';
import artistsData from './mock/artists.json';
import { IArtist } from './models/artists';

import AlbumTable from './components/AlbumTable';
import albumsData from './mock/album.json';
import { IAlbum } from './models/albums';


function App() {
  const [album, setAlbum] = useState<IAlbum[]>([])
  const [artists, setArtists] = useState<IArtist[]>([])
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
    if (artistsData) {
      setIsLoading(true);
      const _artists: IArtist[] = mapObject(artistsData);
      setArtists(_artists);
      setTimeout(() => setIsLoading(false), 3000);
      if (albumsData) {
        setIsLoading(true);
        setAlbum(album);
        setTimeout(() => setIsLoading(false), 4000);
      }
    }
  }, [albumsData]);
  [artistsData]

  return (
    <div>
      <h1>Welcome</h1>
      <ArtistTable artists={artists} isLoading={isLoading} />
      <AlbumTable albums={album} isLoading={isLoading} />


    </div>
  );
}
export default App;

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

/*import AlbumTable from './components/album';

import albumsData from './mock/album.json';
import { IAlbum } from './models/albums';

function  App() {
const [albums, setAlbum] = useState<IAlbum[]>([])
const [isloading, setIsLoading] = useState<boolean>(false);*/


/*useEffect(() => {
  if (albumsData) {
    setIalbums(_albums);
    // setIsLoading(true);
    // setTimeout(() => setIsLoading(false), 4000);
  }
}, [albumsData]);

/*return (
 <div>
   <h1>Welcome</h1>
   <AlbumTable albums={albums} isLoading={isloading} />

 </div>
);
export default App*/

