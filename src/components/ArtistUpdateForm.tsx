import react, { useState } from 'react'
import { IArtist } from '../models/artists';
import { Button, Form, Input, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import FormItem from 'antd/es/form/FormItem';
import './formStyle.css';
import { EndPoints } from '../api/endPoints';
import { useParams } from 'react-router-dom';

interface IArtistUpdateProps {
    artist?: any
}
const UpdateArtistForm = (props: IArtistUpdateProps) => {
    const { artist } = props;
    const params = useParams();
    const { id } = params;
    
    const [data, setData] = useState<{ firstname: string, lastname: string, country: string, about: string }> ({
        firstname: artist.firstName,
        lastname: artist.lastName,
        country: artist.country,
        about: artist.about
        });
        const { TextArea } = Input;
    
        const [body, setBody] = useState<IArtist | null>(null)
        const [form] = Form.useForm();
        const onFinish = async (values: any) => {
    
            const updatedData: IArtist = {
                firstName: values.firstname,
                lastName: values.lastname,
                country: values.country,
                about: values.about
            };
        const { TextArea } = Input;
        
            setBody(updatedData);
            const result = await fetch(
                EndPoints.updateArtist + '/' + id, 
                { method: 'PATCH', 
                body: JSON.stringify(updatedData),
                headers: {
                    "Content-Type": "application/json"
               } });
        }
        return (
        <div style={{ width: 300 }}>
            <Form onFinish={onFinish} form={form} initialValues={{
                firstname: artist?.firstName,
                lastname: artist?.lastName,
                country: artist?.country,
                about: artist?.about
            }}>
                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[{ required: true, message: "First name is required" }]}>
                    <Input id="firstname" placeholder='firstname' prefix={<UserOutlined />} /> 
                </Form.Item><br />
                <Form.Item
                    label="last Name"
                    name="lastname"
                    rules={[{ required: true, message: "Last name is required" }]}>
                    <Input id="lastname" placeholder='lastname' prefix={<UserOutlined />} /> 
                </Form.Item><br />

                <Form.Item
                    label='Country'
                    name="country"
                    rules={[{ required: true, message: "choose country" }]}>
                    <Select
                        placeholder='select one country'
                        style={{ width: 200 }}
                        options={[
                            { value: 'ethiopia', label: 'Ethiopia' },
                            { value: 'jamica', label: 'Jamica' },
                            { value: 'algeria', label: 'Algeria' }
                        ]}
                    />
                </Form.Item>
                <br />
                <Form.Item
                    label="About"
                    name="about"
                    rules={[{ required: true, message: "write about youself" }]}>
                    <TextArea id="name"  placeholder="About artist" allowClear />
                </Form.Item>
                <Button type="primary" htmlType="submit"> Submit </Button>
            </Form>
        </div>
    )

}
export default UpdateArtistForm 
