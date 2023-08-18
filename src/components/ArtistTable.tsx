import React, { useState, useEffect } from 'react';
import { IArtist } from '../models/artists';
import data from '../mock/artists.json';
const ArtistTable = () => {
    const [artists, setArtists] = useState<IArtist[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            setIsLoading(true);
            setArtists(data);
            setTimeout(() => setIsLoading(false), 3000);
        }
    }, [data]);

    return (
        <div>
            <button type="button">Create New</button>
            <table border={1}>
                <thead>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>country</th>
                    {/* <th>about</th> */}
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { 
                    isLoading === true ? (<tr>
                        <td colSpan={4} align='center'>Loading</td>
                    </tr>) : artists.length > 0 ? artists.map((artist) => (
                        <tr key={artist.id}>
                            <td>{artist.firstname}</td>
                            <td>{artist.lastname}</td>
                            <td>{artist.country}</td>
                            {/* <td>{artist.about}</td> */}
                            <td>
                                <button type="button" onClick={() => console.log(`detail - ${artist.id}`)}>Detail</button>
                                <button type="button" onClick={() => console.log(`update - ${artist.id}`)}>Update</button>
                                <button type="button" onClick={() => console.log(`delete - ${artist.id}`)}>Delete</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={4} align='center'>No data</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default ArtistTable;