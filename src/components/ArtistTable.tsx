import { IArtist } from '../models/artists';

interface IArtistComponent {
    artists: IArtist[],
    isLoading: boolean;
}

const ArtistTable = (props: IArtistComponent) => {
    const { artists, isLoading } = props;
    return (
        <div>
            <button type = "button">Create New</button>
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
                                <td>{artist.firstName}</td>
                                <td>{artist.lastName}</td>
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