export interface IArtistDetailProps{
    id?: string;
}
const ArtistDetail = (props: IArtistDetailProps) => {
    const {id} = props;

    /**
     * create local state for artist
     * fetch artist data by id
     * if success, assign the result to artist state
     * else display a message that shows there is no artist with the selected id
     */
    return (<div>
            <ul>
                <li>First Name: Meron</li>
                <li>Last Name: Legesse</li>
                <li>Country: A.A.</li>
                <li>About: About mery</li>
            </ul>
        </div>)
}

export default ArtistDetail;