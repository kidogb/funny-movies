import React, { useState } from 'react';
import { VideoDetail } from './videoDetails';
import { Pagination } from 'antd';
import style from './videosPage.module.css';

export function VideosPage({ videos = [1, 2, 3, 4, 5] }) {
    const user = { userName: "kidogb" };
    const des = "Testing video. This video is amazing gut chop!!\r\n Welcome to my app!! Testing video. This video is amazing gut chop!!\r\n Welcome to my app!! Testing video. This video is amazing gut chop!!\r\n Welcome to my app!!";
    const videoDetails = { title: "Welcome", descriptions: des };
    return (
        <div>
            {videos.map(v => <VideoDetail user={user} videoDetails={videoDetails} />)}
            <div className={style.center}><Pagination defaultCurrent={1} total={50} /></div>
        </div>
    )

}