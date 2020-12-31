import React, { useState } from 'react';
import { Row, Button, Typography, Modal } from 'antd';
import { ShareAltOutlined, LogoutOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import { ShareForm } from './shareForm';
import { useDispatch, useSelector } from 'react-redux';
import { shareVideoAsync } from './../youtubeVideos/videoSlice';


const { Text } = Typography;
export function WelcomeHeader({ user = { id: null, username: null }, onLogout = () => { } }) {
    const [isDisplayShareForm, displayShareForm] = useState(false);
    const dispatch = useDispatch();

    const onShare = () => {
        displayShareForm(!isDisplayShareForm);
    }

    const onShareSubmit = (values) => {
        const payload = { user: { id: user.id }, video: values };
        dispatch(shareVideoAsync(payload));
        onShare();
    }

    const logOut = () => {
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
                    onCancel={onShare}
                    footer={null}
                    style={{ width: '80%' }}>
                    <ShareForm onShareSubmit={onShareSubmit} />
                </Modal>}
            <Row style={{ width: '80%', alignContent: 'center', justifyContent: 'center' }}>
                <Text style={{ marginTop: '1%', marginRight: '5%' }}>Welcome <b>{user.username}</b></Text>
                <Button style={{ marginRight: '5%' }} type="primary" icon={<ShareAltOutlined />} onClick={onShare}>Share a movie</Button>
                <Button icon={<LogoutOutlined />} onClick={logOut}>Logout</Button>
            </Row>
        </>

    );
}
