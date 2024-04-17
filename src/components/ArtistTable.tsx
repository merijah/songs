import { Link } from 'react-router-dom';
import { IArtist } from '../models/artists';
import { Table, Button, Modal, Result } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './formStyle.css';
import { EndPoints } from '../api/endPoints';
interface IArtistComponent {
    artists: IArtist[],
    isLoading: boolean;
    fetchArtist: () => void;
}

const ArtistTable = (props: IArtistComponent) => {
    const [selectedId, setSelectedId] = useState('');
    const navigate = useNavigate();
    const columns = [
        {
            title: "First Name",
            dataIndex: "firstName",
            key: "firstname"
        },
        {
            title: "Last Name",
            dataIndex: "lastName",
            key: "lastname"
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country"
        },
        {
            key: "actions",
            render: (item: String, record: any) => {
                return (
                    <div style={{ display: 'flex', gap: 10}}>
                <Button type='primary' onClick={() => navigate(`/artists/${record._id}`)}>Detail</Button> 
                <Button icon={<EditOutlined />}
                    onClick={() => navigate(`/artists/update/${record._id}`)}>Update</Button> 
                <Button type='primary' onClick={() => {
                setSelectedId(record._id);
                setIsModalOpen(true);
            }} icon={<DeleteOutlined />}>Delete</Button></div>
                )
            }
        }
    ]
    const deleteArtist = async() =>{
        const url = `${EndPoints.deleteArtistUrl}/${selectedId}`;
        const result = await fetch(url, {method: 'DELETE'});
        const data = await result.json();
        return data
    }
    const { artists, isLoading, fetchArtist } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = async () => {
        if (selectedId) {
        const  status = await deleteArtist();
         fetchArtist();
         setIsModalOpen(false);
        }
    }
    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedId("");
    }

    return (
        <div style={{width: '60%' }}>
            <Modal title="Delete Artist" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete this item? {selectedId}</p>
      </Modal>
            <Button type = "link"><Link to="/artists/create">Create New</Link></Button>
            <Table columns={columns} dataSource={artists} rowClassName="table-row" />
        </div>
    );
}

export default ArtistTable;