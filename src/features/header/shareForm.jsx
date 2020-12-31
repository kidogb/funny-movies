import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { ShareAltOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 10,
    },
};

export function ShareForm({ onShareSubmit = () => { } }) {

    const onFinish = (values) => {
        onShareSubmit(values);
    };


    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                label="Youtube URL"
                name="url"
                rules={[
                    {
                        required: true,
                        message: 'Please input movie url!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: 'Please input movie title!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input movie descriptions!',
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    htmlType="submit"
                    icon={<ShareAltOutlined />}>
                    Share
                </Button>
            </Form.Item>
        </Form>
    );
}
