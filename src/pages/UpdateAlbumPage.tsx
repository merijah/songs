import { useParams } from "react-router-dom";
import UpdateAlbumForm from "../components/AlbumUpdateForm";
import { IAlbum } from "../models/albums";
import { useEffect, useState } from "react";
import { EndPoints } from "../api/endPoints";

const UpdateAlbumPage = () => {
  const params = useParams();
  const {id} = params;
  const [album, setAlbum] =useState<IAlbum | undefined>(undefined)
  
  useEffect(() =>{
    if(params) {
        fetch (`${EndPoints.getAlbumByIdUrl}/${ params.id}`, {method:'GET'}) .then((Response) =>{
            Response.json()
            .then( data => setAlbum(data.data))
            .catch(error => setAlbum(undefined))
        }
        ).catch(error => setAlbum(undefined));
    }
  }, [params]);
  return (
    <>{album?._id === undefined ? <div>There is no album with the provided id</div> : <UpdateAlbumForm album={album}/>}</>
    );
}
export default UpdateAlbumPage;