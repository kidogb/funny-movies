import React, { useState } from 'react';
import { VideoDetail } from './videoDetails';

export function VideosPage() {
    const user = { userName: "kidogb" };
    const des = "Testing video. This video is amazing gut chop!!\r\n Welcome to my app!! Testing video. This video is amazing gut chop!!\r\n Welcome to my app!! Testing video. This video is amazing gut chop!!\r\n Welcome to my app!!";
    const videoDetails = { title: "Welcome", descriptions: des };
    return (
        <div>
            <VideoDetail user={user} videoDetails={videoDetails} />
            <VideoDetail user={user} videoDetails={videoDetails} />
            <VideoDetail user={user} videoDetails={videoDetails} />
        </div>
        
    )

}