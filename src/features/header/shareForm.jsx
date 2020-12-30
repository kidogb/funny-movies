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

export function ShareForm() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
