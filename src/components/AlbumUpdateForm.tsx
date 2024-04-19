import { useState } from "react";
import { IAlbum } from "../models/albums";
import { Input } from "antd";
import { Form, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EndPoints } from "../api/endPoints";
import "./formStyle.css";
import { useNavigate, useParams } from "react-router-dom";

interface IAlbumUpdateprops {
    album: any
}
const UpdateAlbumForm = (props: IAlbumUpdateprops) => {
    const params = useParams();
    const { id } = params;
    const {album}=props;
    const [data, setData] =useState<{name:string, year:string, duration:string}>({
      name: album.name,
      year: album.year,
      duration: album.duration
    });
    const {TextArea} = Input;
    
    const [body, setBody] =useState<IAlbum | null>(null);
    const [form]= Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values:IAlbum) =>{
        const updatedData: IAlbum ={
        name: values.name,
        year: Number(values.year),
        duration: Number(values.duration)
        };
        setBody(updatedData);
        const result = await fetch(
              `${EndPoints.updateAlbum}/${id}`,
             { method: 'PATCH',
               body: JSON.stringify(updatedData) ,
               headers: {
                "Content-Type": "application/json"
             }});
         navigate("/albums");
    }
    return (
        <div className="container">
            <Form onFinish={onFinish} className='form' form={form} initialValues={
                {
                    name: album.name,
                    year: album.year,
                    duration: album.duration
                }}>
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
export default UpdateAlbumForm;