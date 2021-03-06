import axios from 'axios'

export async function loginOrRegister(payload) {
    try {
        const url = `/api/users/login`;
        const { data } = await axios.post(url, payload);
        return data;
    } catch (ex) {
        console.log('Error: ', ex);
    }
}

export async function fetchVideo(payload) {
    try {
        const { page = 0, pageSize = 5 } = payload || { page: 0, pageSize: 5 };
        const url = `/api/videos/list?page=${page}&pageSize=${pageSize}`;
        const { data } = await axios.get(url);
        return data;
    } catch (ex) {
        console.log('Error: ', ex);
    }
}

export async function shareVideo(payload) {
    try {
        const url = `/api/videos/share`;
        const { data } = await axios.post(url, payload);
        return data;
    } catch (ex) {
        console.log('Error: ', ex);
    }
}