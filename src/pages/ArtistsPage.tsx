import React, { useEffect, useState } from "react";
import ArtistTable from'../components/ArtistTable';
import artistsData from'../mock/artists.json';
import { IArtist} from'../models/artists';

export const mapArtistObject = (obj: { id?: number, firstname: string, lastname: string, country: string, about: string }) => {
    return {
        firstName: obj.firstname,
        lastName: obj.lastname,
        id: obj.id,
        country: obj.country,
        about: obj.about
    }
}
const ArtistsPage = () => {
    const [artist, setArtist] = useState<IArtist[]>([])
    const [isloading, setIsLoading] = useState<boolean>(false);

    const mapObject = (obj: { id?: number, firstname: string, lastname: string, country: string, about: string }[]): IArtist[] => { 
            const result: IArtist[] = obj.map((c) => {
                const o: IArtist = mapArtistObject(c)
            return o;
          })
          return result;
        }

     useEffect(() => {
        if (artistsData) {
            setIsLoading(true);
            const _artists: IArtist[] = mapObject(artistsData);
            setArtist(_artists);
            setIsLoading(false);
            // setTimeout(() => setIsLoading(false), 3000);
        }
    }, [artistsData]);

 return (
    <ArtistTable artists={artist} isLoading={isloading} />
   )
}
 export default ArtistsPage;