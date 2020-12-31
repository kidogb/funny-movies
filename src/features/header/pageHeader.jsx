import React from 'react';
import { LoginForm } from './loginForm';
import { Row, Col, Image } from 'antd';
import { WelcomeHeader } from './welcomeHeader';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, logout, selectUser } from './userSlice';

import logo from './../../logo.svg';
import style from './pageHeader.module.css';

export function PageHeader() {
    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const onLoginSubmit = (value) => {
        dispatch(loginAsync(value));
    }

    const onLogoutSubmit = () => {
        dispatch(logout());
    }

    return (
        <div className={style.header}>
            <Row style={{ width: '100%' }}>
                <Col span={4}>
                    <Image style={{ marginLeft: '10%' }} src={logo} />
                </Col>
                <Col span={10}></Col>
                <Col span={10}>
                    {user.id ? <WelcomeHeader user={user} onLogout={onLogoutSubmit} /> : <LoginForm onLogin={onLoginSubmit} />}
                </Col>
            </Row>

        </div>

    )

}