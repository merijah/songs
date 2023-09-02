import React, { useEffect, useState } from "react";
import ArtistTable from'../components/ArtistTable';
import artistsData from'../mock/artists.json';
import { IArtist} from'../models/artists';

const ArtistsPage = () => {
    const [artist, setArtist] = useState<IArtist[]>([])
    const [isloading, setIsLoading] = useState<boolean>(false);

    const mapObject = (obj: { id?: number, firstname: string, lastname: string, country: string, about: string }[]): IArtist[] => { 
            const result: IArtist[] = obj.map((c) => {
                const o: IArtist = {
                    firstName: c.firstname,
                    lastName: c.lastname,
                    id: c.id,
                    country: c.country,
                    about: c.about
                }
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