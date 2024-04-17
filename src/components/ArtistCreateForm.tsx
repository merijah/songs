import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import { IArtist } from "../models/artists";
import FormItem from "antd/es/form/FormItem";
import "./formStyle.css";
import { EndPoints } from "../api/endPoints";
import { Navigate, useNavigate } from "react-router-dom";
const CreateArtistForm = () => {
  const [data, setData] = useState<{
    firstname: String;
    lastname: String;
    country: String;
    about: string;
  }>({
    firstname: "",
    lastname: "",
    country: "",
    about: "",
  });
  const { TextArea } = Input;
  const changeHandler = (e: any) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  const navigate = useNavigate();
  const [body, setBody] = useState<IArtist | null>(null);
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    console.log("-----", values);
    const artist: IArtist = {
      firstName: values.firstname,
      lastName: values.lastname,
      country: values.country,
      about: values.about,
    };
    setBody(artist);

    const result = await fetch(EndPoints.createArtist, {
      method: "POST",
      body: JSON.stringify(artist),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/artists");
  };
  return (
    <div className="container">
      <Form onFinish={onFinish} className="form" form={form}>
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: "First name is required" }]}
        >
          <Input
            id="firstname"
            placeholder="firstname"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          label="last Name"
          name="lastname"
          rules={[{ required: true, message: "Last name is required" }]}
        >
          <Input
            id="lastname"
            placeholder="lastname"
            prefix={<UserOutlined />}
          />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          rules={[{ required: true, message: "choose country" }]}
        >
          <Select
            placeholder="select one country"
            style={{ width: 200 }}
            options={[
              { value: "ethiopia", label: "Ethiopia" },
              { value: "jamica", label: "Jamica" },
              { value: "algeria", label: "Algeria" },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="About"
          name="about"
          rules={[{ required: true, message: "write about youself" }]}
        >
          <TextArea id="name" placeholder="About artist" allowClear />
        </Form.Item>
        <Form.Item className="button-container">
          <Button type="primary" htmlType="submit" className="submit">
            Submit{" "}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default CreateArtistForm;
