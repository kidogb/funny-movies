import React from 'react';
import { Row, Col, Typography } from 'antd';
import ReactPlayer from 'react-player';
import style from './videoDetails.module.css';
import 'antd/dist/antd.css';

const { Text, Paragraph } = Typography;
export function VideoDetail({ user, videoDetails }) {
    console.log(user);
    return (
        <div id="video-details" className={style.video}>
            <Row style={{ width: '80%' }}>
                <Col span={16}>
                    <ReactPlayer url="https://www.youtube.com/watch?v=S0kk7ZEbCzI" controls />
                </Col>

                <Col span={8}>
                    <Row>
                        <Text type="danger" strong>{videoDetails.title}</Text>
                    </Row>
                    <Row>
                        <Text >Shared by <b>{user.userName}</b></Text>
                    </Row>
                    <Row>
                        <Paragraph ellipsis={{
                            rows: 5,
                            expandable:true,
                        }}>{videoDetails.descriptions}</Paragraph>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
// VideoDetail.defaultProps = {
//     user: { userName: "" },
//     videoDetails: { title: "", descriptions: "" }
// }