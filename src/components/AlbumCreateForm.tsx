import { useState } from "react";
import { IAlbum } from "../models/albums";
import { Button, Input } from "antd";
import { Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EndPoints } from '../api/endPoints'
import './formStyle.css'


const CreateAlbumForm = () => {
    const [data, setData] = useState<{ name: string, year: string, duration: string }>({
        name: "",
        year: "",
        duration: ""
    });
    const { TextArea } = Input;
    const changeHandler = (e: any) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.prev]: e.target.value
            }
        });
    }
    const [body, setBody] = useState<IAlbum | undefined>(undefined);
    const [form] = Form.useForm();
    const onFinish = async (value: IAlbum) => {
        const album: IAlbum = {
            name: value.name,
            year: value.year,
            duration: value.duration
        };
        setBody(album);

        const result = await fetch(EndPoints.createAlbum, 
            { 
             method: 'POST', 
             body: JSON.stringify(album),
             headers: {
                'Content-Type': 'application/json'
             }
            });
    }
    return (
        <div className="container">
            <Form onFinish={onFinish} className='form' form={form}>
                <Form.Item
                    label='Name'
                    name='name'
                    rules={[{ required: true, message: "enter name" }]}>
                    <Input id="name" placeholder="Name" prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                    label="Year"
                    name="year"
                    rules={[{ required: true, message: "year is required" }]}>
                    <Input id="year" placeholder="year" prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                    label="Duration"
                    name="duration"
                    rules={[{ required: true, message: "enter duration" }]}>
                    <Input id="duration" placeholder="duration" prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item className="button-container">
                    <Button type="primary" htmlType="submit" className="summit">Submit </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default CreateAlbumForm;