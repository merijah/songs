import { useState } from "react";
import { ISong } from "../models/songs";
import { Button, Form, Input,} from "antd";
import { UserOutlined } from "@ant-design/icons";
import './formStyle.css';
import { EndPoints } from "../api/endPoints";



const CreateSongForm = () => {
    const [data, setData] =useState<{title: string, duration: string, year: string, author: string,  }>({
        title: "",
        duration:"",
        year:"",
        author:"",

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
    const [body, setBody] =useState<ISong | undefined>(undefined)
    const [form] = Form.useForm();
    const onFinish= async(value: ISong) =>{
        console.log(value)
        const Song: ISong = {
            title: value.title,
            duration: Number(value.duration),
            year: Number(value.year),
            author: value.author,
        };
        setBody(Song);

     const result = await fetch(
                            EndPoints.createSong, 
                            { 
                                method: 'POST', 
                                body: JSON.stringify(body), 
                                headers: {
                                    "Content-Type": "application/json"
                                } });

     }
     return (
        <div className='container'>
            <Form onFinish={onFinish} className='form' form={form}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "title is required" }]}>
                    <Input id="title" placeholder='title' prefix={<UserOutlined />} /> 
                </Form.Item>
                <Form.Item
                    label="Duration"
                    name="duration"
                    rules={[{ required: true, message: "Duration is required" }]}>
                    <Input id="duration" placeholder='duratiopn' prefix={<UserOutlined />} /> 
                </Form.Item>
                <Form.Item
                    label='Year'
                    name="year"
                    rules={[{ required: true, message: "Enter  year" }]}>
                   <Input id="year" placeholder="year" prefix={<UserOutlined/>}/>
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
export default CreateSongForm;
