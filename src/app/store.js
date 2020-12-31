import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/header/userSlice';
import videoReducer from '../features/youtubeVideos/videoSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
  },
});
