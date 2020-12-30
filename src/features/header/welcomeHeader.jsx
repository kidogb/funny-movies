import React, { useState } from 'react';
import { Row, Button, Typography, Modal } from 'antd';
import { ShareAltOutlined, LogoutOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import { ShareForm } from './shareForm';

const { Text } = Typography;
export function WelcomeHeader({ onLogout = () => { } }) {
    const [isDisplayShareForm, displayShareForm] = useState(false);
    const onSharing = () => {
        console.log("Show share form: ", !isDisplayShareForm);
        displayShareForm(!isDisplayShareForm);
    }
    const logOut = () => {
        console.log("Log out!");
        onLogout();
    }
    return (
        <>
            {isDisplayShareForm &&
                <Modal
                    title="Share a Youtube movie"
                    centered
                    visible
                    closable={false}
                    onCancel={onSharing}
                    footer={null}
                    style={{ width: '80%' }}>
                    <ShareForm />
                </Modal>}
            <Row style={{ width: '80%', alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ marginTop: '1%', marginRight: '5%' }}>Welcome <b>kidogb</b></Text>
                <Button style={{ marginRight: '5%' }} type="primary" icon={<ShareAltOutlined />} onClick={onSharing}>Share a movie</Button>
                <Button icon={<LogoutOutlined />} onClick={logOut}>Logout</Button>
            </Row>
        </>

    );
}
