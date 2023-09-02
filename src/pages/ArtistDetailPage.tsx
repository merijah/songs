import { useParams } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail";

const ArtistDetailPage = () => {
    const {id} = useParams();
    return (
        <ArtistDetail id={id}/>
    )
}

export default ArtistDetailPage;