import { createSlice } from '@reduxjs/toolkit';
import { loginOrRegister } from './../../api/api'
import { notification } from 'antd';

export const userSlice = createSlice({
  name: 'user',
  initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = action.payload.id;
      state.username = action.payload.username;
    },
    logout: state => {
      // clear in localStorage
      if (localStorage)
        localStorage.removeItem('user');
      state.id = null;
      state.username = null;
    }
  },
});

export const loginAsync = payload => dispatch => {
  const res = loginOrRegister(payload).then(res => {
    if (res && res.status && res.status === 200) {
      notification['success']({
        message: 'Success',
        description: `${res.message}`,
      });
      const user = { id: res.data[0].id, username: res.data[0].username };
      // save to localStorage
      if (localStorage)
        localStorage.setItem('user', JSON.stringify(user));
      // update reducer
      dispatch(login(user));
    } else if (res && res.status && res.status === 401) {
      notification['error']({
        message: 'Error',
        description: `${res.message}`,
      });
    }
  });
};

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
