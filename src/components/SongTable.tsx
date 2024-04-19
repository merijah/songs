import { useState } from 'react';
import { ISong } from '../models/songs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Modal, Result, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import result from 'antd/es/result';
import { EndPoints } from '../api/endPoints';

interface ISongcomponent {
    songs: ISong[],
    isloading: boolean;
    fetchSong: () => void;
}
const SongTable = (props: ISongcomponent) => {
    const params = useParams();
    const { id } = params;

    const [selectedId, setSelectedId] = useState('');
    const [open, setOpen] = useState(false)
    const navigate =useNavigate();

    const removeSong = () => {}

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title:'Duration',
            dataIndex:'duration',
            key:'duration'
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year'
        },
        {
            title: 'Author',
            dataIndex:'author',
            key: 'author'
        },
        {
            dataIndex: 'actions',
            render: (item: String, record: any) => <div style={{ display: 'flex', gap: 10}}>
            <Button type='primary' onClick={() => navigate(`/songs/${record._id}`)}>Detail</Button>
            {id && <Button icon={<EditOutlined />}
                onClick={() => setOpen(true)}>Remove</Button> } 
            {!id && <Button icon={<EditOutlined />}
                onClick={() => navigate(`/songs/update/${record._id}`)}>Update</Button> }
            {!id && <Button type='primary' onClick={() => {
            setSelectedId(record._id);
            setIsModalOpen(true);
        }} icon={<DeleteOutlined />}>Delete</Button>}</div>
        }
    ];
    const deleteSong = async() => {
        const url = `${EndPoints.deleteSongUrl}/${selectedId}`;
        const result = await fetch (url, {method: 'DELETE'});
        const data = await result.json();
        return data
    }

    const { songs, isloading, fetchSong } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = async() => {
       if (selectedId) {
        const status = await deleteSong();
        fetchSong();
        setIsModalOpen(false);
      }
    }
    const handleCancel = () => {
        setIsModalOpen(false)
        setSelectedId("");
    }
    return (
        <div style={{width: '60%' }}>
            <Modal title="Delete Song" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete this item? {selectedId}</p>
      </Modal>
      <Modal
        title="Remove Song"
        open={open}
        onOk={() => {
            removeSong();
            setOpen(false);
        }}
        onCancel={() => setOpen(false)}>
        <p>
          Are you sure you want to remove this song from the selected album?
        </p>
      </Modal>
            {!id && <Button type = "link"><Link to="/songs/create">Create New</Link></Button>}
            <Table columns={columns} dataSource={songs} rowClassName="table-row" />
        </div>
    );
}

export default SongTable;