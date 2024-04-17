import { useState } from 'react';
import { IAlbum } from '../models/albums';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { EndPoints } from '../api/endPoints';
import './formStyle.css';

interface IAlbumComponent {
    albums: IAlbum[],
    isLoading: boolean;
    fetchAlbum: () => void;
}
const AlbumTable = (props: IAlbumComponent) => {
    const [selectid, setSelectedId] = useState('');
    const navigate = useNavigate();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year'
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
            key: 'durtion',
        },
        {
            dataIndex: 'actions',
            render: (Items: string, record: any) => <div style={{display: 'flex', gap: 10}}>
                <Button type='primary' onClick={() => navigate(`/albums/${record._id}`)}>Detail</Button>
                <Button icon={<EditOutlined />}
                    onClick={() => navigate(`/albums/${record._id}`)}>Update</Button>
                    <DeleteOutlined color='red'  onClick={() => {
                        setSelectedId(record._id);
                        setIsModalOpen(true);
                    }}/>
                    {/* <Button type='primary' onClick={() => {
                        setSelectedId(record.id);
                        setIsModalOpen(true);
                    }} icon={<DeleteOutlined />}>Delete</Button> */}
            </div>
        }
    ];

    const deleteAlbum = async() => {
        const url = `${EndPoints.deleteAlbumUrl}/${selectid}`;
        const result = await fetch(url, {method: "DELETE"});
        const data = await result.json();
        console.log(data, result)
        return data;
    }

    const { albums, isLoading, fetchAlbum } = props;
    const [isModalOpen, setIsModalOpen] =useState(false)
    const handleOk = async () =>{
        if(selectid) {
            const status = await deleteAlbum();

            // if successfuly deleted
            // if(status === 'success') {
            //     fetchAlbum();
            // }
            fetchAlbum();
            setIsModalOpen(false);
        }
    }
    const handleCancel = ()=> {
        setIsModalOpen(false);
        setSelectedId("");
    }
    return(
        <div>
            <Modal title= "Delete Album" open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}>
            <p> Are you sure you want to delete this item? {selectid}</p>
            </Modal>
            <Button type='link'><Link to="/albums/create"> Create New</Link></Button>
            <Table columns={columns} dataSource={albums} rowClassName='table-row'/>
        </div>
    );

   
}
export default AlbumTable;