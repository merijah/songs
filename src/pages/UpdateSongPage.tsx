import { useParams } from 'react-router-dom';
import { ISong } from '../models/songs';
import { useEffect, useState } from 'react';
import UpdateSongForm from '../components/SongUpdateForm';
import { EndPoints } from '../api/endPoints';


const UpdateSongPage = () => {
    const params = useParams();
    const { id } = params
    const [Song, setSong] = useState<ISong | undefined>(undefined);

    useEffect(() => {
        if (params) {
            fetch(`${EndPoints.getSongsByIdUrl}/${params.id}`, { method: 'GET' }).then((response) => {
                response.json()
                    .then(data => setSong(data.data))
                    .catch(error => setSong(undefined))

            }
            ).catch(error => setSong(undefined));
        }
    }, [params]);

    return (
        <>{Song?._id === undefined ? <div>There is no Song with the provided id</div> :
            <UpdateSongForm song={Song} />}</>
    );
}
export default UpdateSongPage;