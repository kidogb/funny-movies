import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/header/userSlice';
import videoReducer from '../features/youtubeVideos/videoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    video: videoReducer,
  },
});
