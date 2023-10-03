import React, { useEffect, useState } from "react";
import ArtistTable from'../components/ArtistTable';
import { IArtist} from'../models/artists';
import { EndPoints } from "../api/endPoints";

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
    const [artists, setArtists] = useState<IArtist[]>([])
    const [artistsData, setArtistsData] = useState([])
    const [isloading, setIsLoading] = useState<boolean>(false);

    const mapObject = (obj: { id?: number, firstname: string, lastname: string, country: string, about: string }[]): IArtist[] => { 
            const result: IArtist[] = obj.map((c) => {
                const o: IArtist = mapArtistObject(c)
            return o;
          })
          return result;
        }

     useEffect(() => {
            setIsLoading(true);
            fetch(EndPoints.getArtistsUrl).then((response) => {
                response.json().then((data) => {
                    const _artists: IArtist[] = mapObject(data);
            setArtists(_artists);
                }).catch((error) => {})
            }).catch((err) => {});
            setIsLoading(false);
    }, []);

 return (
    <ArtistTable artists={artists} isLoading={isloading} />
   )
}
 export default ArtistsPage;