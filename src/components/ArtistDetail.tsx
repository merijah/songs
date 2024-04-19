import { memo, useState } from "react";
import { IArtist } from "../models/artists";
import React from "react";
import AlbumTable from "./AlbumTable";
import { useParams } from "react-router-dom";
import { EndPoints } from "../api/endPoints";
import { IAlbum } from "../models/albums";
import { Button, Modal, Table } from "antd";

export interface IArtistDetailProps{
    artist?: IArtist
}

const ArtistDetail: React.FC<IArtistDetailProps> = ({artist}) => {
    const params = useParams();
    const { id } = params;
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [allAlbums, setAllAlbums] = useState<IAlbum[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    
    const fetchAlbum = () => {
        fetch(`${EndPoints.getArtistsUrl}/${id}/albums`)
            .then(Response => {
             Response.json().then((data) => {
                setAlbums(data.data)
                // const _albums: IAbum[] = data;
                // setAlbums(_albums)
             }
          )
            })
            .catch(err => {

            });
    }
    
    const fetchAllAlbums = () => {
        fetch(`${EndPoints.getAlbumsUrl}`)
            .then(Response => {
             Response.json().then((data) => {
                const filteredAlbums = data.message.filter((album: IAlbum) => 
                    {
                        const _album = albums.find((x: IAlbum) => x._id === album._id);
                        if (!_album){
                            return album;
                        }
                    }
                );
                setAllAlbums(filteredAlbums);
                // const _albums: IAbum[] = data;
                // setAlbums(_albums)
             }
          )
            })
            .catch(err => {

            });
    }

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name'},
        { title: 'Year', dataIndex: 'year', key: 'year'},
        { title: 'Duration', dataIndex: 'duration', key: 'duration'},
        { title: 'Add', dataIndex: 'id', key: 'id', render: (_: any, record: any) => {
            return (
                <Button onClick={() => {
                    fetch(`${EndPoints.createArtist}/${id}/albums`, {
                        method: 'POST',
                        body: JSON.stringify(
                            {
                                albumId: record._id,
                                artistId: id
                            }
                        ),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                }}>Add</Button>
            )
        }},
    ];
    
    
    return (<div>
            {artist ? 
            <div>
                <ul>
                <li>First Name: {artist.firstName }</li>
                <li>Last Name: {artist.lastName }</li>
                <li>Country: {artist.country}</li>
                <li>About: {artist.about}</li>
            </ul>
            <h2 style={{color: 'white', marginTop: 50, textAlign: 'center'}}>{artist.firstName}'s Albums</h2>
            <Button onClick={() => {
                fetchAllAlbums();
                setOpen(true);
                }}>Add Album</Button>
            <Modal open={open} onCancel={() => setOpen(false)}>
                <Table dataSource={allAlbums} columns={columns} />
            </Modal>
            <AlbumTable albums={albums} isLoading={false} fetchAlbum={fetchAlbum} />
            </div> : <h1>No data found</h1>}
        </div>)
}

const areEqual = (oldProp: IArtistDetailProps, newProp: IArtistDetailProps): boolean => {
    return oldProp.artist?._id === newProp.artist?._id;
}
export default memo(ArtistDetail, areEqual);