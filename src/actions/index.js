import axios from 'axios';

const URL = 'https://reduxblog.herokuapp.com/api/';
const KEY = '?key=aavish';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';



export function fetchPosts() {
    const request = axios.get(`${URL}posts${KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${URL}posts${KEY}`, values).then(() => callback());
    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${URL}posts/${id}/${KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${URL}posts/${id}/${KEY}`).then(() => callback());
     return {
        type: DELETE_POST,
        payload: id
    };    
}