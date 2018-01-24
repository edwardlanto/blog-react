export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=react-blog1995';

// Get Request
export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
    return{
        type: FETCH_POSTS,
        payload: request
    };
}

// Get Single Post

export function fetchPost(id){
   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
   return{
       type:FETCH_POST,
       payload: request
   }
}

// Post Request

//Passing in values from form
export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(()=> callback())
    return{
        type:CREATE_POST,
        payload:request
    }
}

//Delete Requeset

export function deletePost(id, callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=> callback());
    return{
        type:DELETE_POST,
        payload: id
    }
}


