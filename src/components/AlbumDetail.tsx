import {memo, useEffect, useState} from "react";
import { IAlbum } from "../models/albums"
import SongTable from "./SongTable";
import { EndPoints } from "../api/endPoints";
import { ISong } from "../models/songs";
import { useParams } from "react-router-dom";
import { Button, Modal, Table } from "antd";

export interface IAlbumDetailprops {
    album : IAlbum | undefined;
}
const AlbumDetail = (props: IAlbumDetailprops) => {
    const  {album} = props;
    const [songs, setSongs] = useState<ISong[]>([]);
    const [allSongs, setAllSongs] = useState<ISong[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const params = useParams();
    const { id } = params;

    const fetchSong = () => {
        fetch(`${EndPoints.getAlbumByIdUrl}/${id}/songs`)
        .then(Response => {
            Response.json().then((data) => {
                setSongs(data.data)
            }
            )
        })
        .catch(err => {

        })
    }
    useEffect(() => {
        fetchSong();
    }, []);

    const fetchAllSongs = () => {
        fetch(EndPoints.getSongsUrl)
        .then(Response => {
            Response.json().then((data) => {
                const filteredSongs = data.message.filter((song: ISong) => {
                    const _song = songs.find((x: ISong) => x._id === song._id);

                    if(!_song){
                        return song;
                    }
                });
                setAllSongs(filteredSongs)
            }
            )
        })
        .catch(err => {

        })
    }

    const columns = [
        { title: 'Title', dataIndex: 'title', key: 'title'},
        { title: 'Duration', dataIndex: 'duration', key: 'duration'},
        { title: 'Author', dataIndex: 'year', key: 'year'},
        { title: 'Add', dataIndex: 'id', key: 'id', render: (_:any, record: ISong) => {
            return (
                <Button onClick={() => {
                    fetch(`${EndPoints.getAlbumsUrl}/${id}/songs`, {
                        method: 'POST',
                        body: JSON.stringify(
                            {
                                albumId: id,
                                songId: record._id
                            }
                        ),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    setOpen(false);
                    fetchSong();
                }}>Add</Button>
            )
        }},
    ]
     
    return ( <div>
        {album ? 
        <div>
        <ul>
            <li>name: {album.name}</li>
            <li>year: {album.year}</li>
            <li>duration: {album.duration}</li>
        </ul>
        <h2 style={{color: 'white', marginTop: 50, marginBottom: 15}}>Songs in {album.name} album</h2>
        <Button style={{marginBottom: 5}} onClick={() => {
            fetchAllSongs();
            setOpen(true);
            }}>Add Song</Button>
        <Modal title="Add Song" open={open} onCancel={() => setOpen(false)}>
            <Table columns={columns} dataSource={allSongs} />
        </Modal>
        <SongTable songs={songs} isloading={false} fetchSong={fetchSong} />
        </div> : <h1>no data found</h1>}
    </div>

    )
 
}

const areEqual = (oldAlbum: IAlbumDetailprops, newAlbum: IAlbumDetailprops): boolean => oldAlbum.album?._id === newAlbum.album?._id;

export default memo(AlbumDetail, areEqual);