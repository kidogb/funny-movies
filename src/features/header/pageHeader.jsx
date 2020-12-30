import React, { useState } from 'react';
import { LoginForm } from './loginForm';
import { Row, Col, Image } from 'antd';
import { WelcomeHeader } from './welcomeHeader';
import logo from './../../logo.svg';
import style from './pageHeader.module.css';

export function PageHeader() {
    const [isLoggedIn, setLoginStatus] = useState(false);

    const onLoginSubmit = () => {
        console.log("Call api login success");
        setLoginStatus(true);
    }

    const onLogoutSubmit = () => {
        console.log("Call api logout success");
        setLoginStatus(false);
    }

    return (
        <div className={style.header}>
            <Row style={{ width: '100%' }}>
                <Col span={4}>
                    <Image style={{ marginLeft: '10%' }} src={logo} />
                </Col>
                <Col span={10}></Col>
                <Col span={10}>
                    {isLoggedIn ? <WelcomeHeader onLogout={onLogoutSubmit} /> : <LoginForm onLogin={onLoginSubmit} />}
                </Col>
            </Row>

        </div>

    )

}