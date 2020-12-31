import { createSlice } from '@reduxjs/toolkit';
import { fetchVideo, shareVideo } from '../../api/api';
import { notification } from 'antd';

export const videoSlice = createSlice({
  name: 'video',
  initialState: {},
  reducers: {
    fetchAll: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.pagination = action.payload.pagination;
      state.data = action.payload.data;
    },
  },
});

export const fetchVideoAsync = payload => dispatch => {
  fetchVideo(payload).then(res => {
    if (res && res.status && res.status === 200) {
      // notification['success']({
      //   message: 'Success',
      //   description: `${res.message}`,
      // });
      // update reducer
      const { pagination, data } = res;
      dispatch(fetchAll({ pagination, data }));
    } else if (res && res.status && res.status === 400) {
      notification['error']({
        message: 'Error',
        description: `${res.message}`,
      });
    }
  });
};

export const shareVideoAsync = payload => dispatch => {
  shareVideo(payload).then(res => {
    if (res && res.status && res.status === 200) {
      notification['success']({
        message: 'Success',
        description: `${res.message}`,
      });
      // update list video
      dispatch(fetchVideoAsync());
    } else if (res && res.status && res.status === 400) {
      notification['error']({
        message: 'Error',
        description: `${res.message}`,
      });
    }
  });
};
export const { fetchAll } = videoSlice.actions;

export const selectVideo = state => state.video;

export default videoSlice.reducer;
