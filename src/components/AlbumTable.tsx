import { IAlbum } from '../models/albums';
import { Link } from 'react-router-dom';

interface IAlbumComponent {
    albums: IAlbum[],
    isLoading: boolean;
}
const AlbumTable = (props: IAlbumComponent) => {
    const { albums, isLoading } = props;
    return (
        <div>
            <button type="button">create new</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>year</th>
                        <th>duration</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading === true ? (<tr>
                            <td colSpan={4} align='center'>Loading</td>
                        </tr>) : albums.length > 0 ? albums.map((album) => (
                            <tr key={album.id}>
                                <td>{album.name}</td>
                                <td>{album.year}</td>
                                <td>{album.duration}</td>
                                <td>
                                <Link to={`/albums/${album.id}`} className="btn">Detail</Link>
                                    <button type="button" onClick={() => console.log(`update - ${album.id}`)}>Update</button>
                                    <button type="button" onClick={() => console.log(`delete - ${album.id}`)}>Delete</button>
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
export default AlbumTable;