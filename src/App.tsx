import React, { useEffect, useState } from 'react';
import ArtistTable from './components/ArtistTable';
import Counter from './components/counter';

import data from './mock/artists.json';
import { IArtist } from './models/artists';

function App() {
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
    if (data) {
      setIsLoading(true);
      const _artists: IArtist[] = mapObject(data);
      setArtists(_artists);
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [data]);
  
  return (
    <div>
      <h1>Welcome</h1>
      <ArtistTable artists={artists} isLoading={isLoading} />
      <Counter />
    </div>
  );
}

export default App;
