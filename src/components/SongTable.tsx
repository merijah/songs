import { ISong } from '../models/songs';

interface ISongcomponent {
    songs: ISong[],
    isloading: boolean;
}
const SongTable = (props: ISongcomponent) => {
    const { songs, isloading } = props;

    return (
        <div>
            <button type="button"> Create new </button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>duration</th>
                        <th>year</th>
                        <th>author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isloading === true ? (<tr>
                            <td colSpan={4} align='center'>Loading</td>
                        </tr>) : songs.length > 0 ? songs.map((song) => (
                            <tr key={song.id}>
                                <td>{song.title}</td>
                                <td>{song.duration}</td>
                                <td>{song.year}</td>
                                <td>{song.author}</td>
                                <td>
                                    <button type="button" onClick={() => console.log(`detail - ${song.id}`)}>Detail</button>
                                    <button type="button" onClick={() => console.log(`update - ${song.id}`)}>Update</button>
                                    <button type="button" onClick={() => console.log(`delete - ${song.id}`)}>Delete</button>
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
export default SongTable;


