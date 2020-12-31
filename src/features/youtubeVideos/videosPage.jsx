import React, { useEffect } from 'react';
import { VideoDetail } from './videoDetails';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoAsync, selectVideo } from './videoSlice';
import style from './videosPage.module.css';

export function VideosPage() {
    const dispatch = useDispatch();
    const videos = useSelector(selectVideo);

    useEffect(() => {
        dispatch(fetchVideoAsync({ page: 0 }));
    });

    const onPageChange = (page) => {
        dispatch(fetchVideoAsync({ page: page - 1 }));
    }
    const { data, pagination } = videos;
    return (
        <div>
            {data && data.map(v => <div key={`video-${v.video_id}`}><VideoDetail videoDetails={v} /></div>)}
            {pagination &&
                <div className={style.center}>
                    <Pagination
                        defaultCurrent={1}
                        current={pagination.current + 1}
                        pageSize={pagination.pageSize}
                        total={pagination.total}
                        onChange={onPageChange}
                    />
                </div>}
        </div>
    )

}