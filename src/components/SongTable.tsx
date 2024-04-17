import { useState } from 'react';
import { ISong } from '../models/songs';
import { Link, useNavigate } from 'react-router-dom';
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
    const [selectedId, setSelectedId] = useState('')
    const navigate =useNavigate();
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
            render: (item: String, record: any) => <div>
            <Button type='primary' onClick={() => navigate(`/songs/${record._id}`)}>Detail</Button> 
            <Button icon={<EditOutlined />}
                onClick={() => navigate(`/songs/update/${record._id}`)}>Update</Button> 
            <Button type='primary' onClick={() => {
            setSelectedId(record._id);
            setIsModalOpen(true);
        }} icon={<DeleteOutlined />}>Delete</Button></div>
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
            <Button type = "link"><Link to="/songs/create">Create New</Link></Button>
            <Table columns={columns} dataSource={songs} rowClassName="table-row" />
        </div>
    );
}

export default SongTable;