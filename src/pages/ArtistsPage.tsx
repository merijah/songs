import React, { useEffect, useState } from "react";
import ArtistTable from '../components/ArtistTable';
import { IArtist } from '../models/artists';
import { EndPoints } from "../api/endPoints";

const ArtistsPage = () => {
    // localStorage.setItem('Meron', 'some value')
    const [artists, setArtists] = useState<IArtist[]>([])
    // const [artistsData, setArtistsData] = useState([])
    const [isloading, setIsLoading] = useState<boolean>(false);
    const fetchArtist = () => {
        fetch(EndPoints.getArtistsUrl).then((response) => {
            response.json().then((data) => {
                setArtists(data.message);
              }
            )
            })
        .catch(err => {
           });
        }
        useEffect(() => {
                setIsLoading(true);
                setIsLoading(false);
                fetchArtist();
               
                    }, []);
        return (
            <ArtistTable artists={artists} isLoading={isloading} fetchArtist={fetchArtist} />
        )
    }
    export default ArtistsPage;