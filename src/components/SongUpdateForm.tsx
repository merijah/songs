import { useState } from "react";
import { ISong } from "../models/songs";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import FormItem from 'antd/es/form/FormItem';
import './formStyle.css';
import { EndPoints } from '../api/endPoints';

interface ISongUpdateprops {
    song?: ISong
}
const UpdateSongForm = (props: ISongUpdateprops) => {
    const { song } = props;
    const [data, setData] = useState<{ title: String, duration: number, year: number, author: String }>({
        title: song?.title || '',
        duration: song?.duration || 0,
        year: song?.year || 0,
        author: song?.author || ''
        
    });
    const { TextArea } = Input;
    const changeHandler = (e: any) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.id]: e.target.value
            }
        });
    }
    const [body, setBody] = useState<ISong | null>(null)
    const [form] = Form.useForm();
    const onFinish = async(value: ISong) => {
        const updatedData: ISong = {
            title: value.title,
            duration: Number(value.duration),
            year: Number (value.year),
            author: value.author,
            __v: 0
        };
        setBody(updatedData);

        const result = await fetch(
            EndPoints.updateSong + '/' + song?._id, 
            { 
                method: 'PATCH', 
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
             });

    }
    return (
        <div className="container">
         <Form onFinish = {onFinish} className='form' form={form} initialValues={{
            title: song?.title,
            duration: song?.duration,
            year: song?.year,
            author: song?.author
        
         }}>
            <Form.Item
                label='Title'
                name='title'
                rules={[{ required: true, message: "title is required" }]}>
                <Input id="title" placeholder='title' prefix={<UserOutlined />} />
            </Form.Item>
                <Form.Item
                    label='Year'
                    name="year"
                    rules={[{ required: true, message: "enter a year" }]}>
                    <Input id="year" placeholder="year" prefix={<UserOutlined />} />
                </Form.Item>
            <Form.Item 
                 label='Durtion'
                 name='duration'
                 rules={[{ required:true, message:"enter duration"}]}    >
                 <Input id="duration" placeholder="duration"prefix={<UserOutlined/>} />
            </Form.Item>
            <Form.Item
                    label="Author"
                    name="author"
                    rules={[{ required: true, message: "write author name" }]}>
                    <Input id="author" placeholder="author" prefix={<UserOutlined/>}/>
                    </Form.Item>
                <Form.Item className='button-container'>
                    <Button type="primary" htmlType="submit" className='submit'> Submit </Button>
                </Form.Item>
        </Form>
        </div>
    )
}
export default UpdateSongForm;