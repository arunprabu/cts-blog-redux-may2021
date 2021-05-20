import axios from 'axios';
import { ADD_POST, GET_POSTS, GET_POST_BY_ID, DELETE_POST } from "../actions/types";
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

// adding post 
export const createPost = (data) => {
  console.log(data);
  return (dispatch) => {
    // AJAX call to add a post
    return axios.post(POSTS_API_URL, data )
      .then(response => {
          alert('Success');
          dispatch({
            type: ADD_POST,
            payload: {
              id: response.data.id,
              title: response.data.title,
              body: response.data.body
            }
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        console.log('It is over!');
      });
  };
};

// get all posts
export const getPosts = () => {
  console.log('Inside getPosts');
  return (dispatch)=> {
    return axios.get(POSTS_API_URL)
      .then( (response) => {
        console.log(response);
        dispatch( {
          type: GET_POSTS,
          payload: response.data
        })
      })
      .catch( (err)=> {
        console.log('Some error occurred. Please try later!');
      })
      .finally( ()=> {
        console.log('It is over!');
      }); 
  }
} 

export const getPostById = (postId) => {
  console.log(postId);
  return (dispatch)=> {
    return axios.get(POSTS_API_URL + '/' + postId)
      .then( (response) => {
        console.log(response);
        dispatch( {
          type: GET_POST_BY_ID,
          payload: response.data
        })
      })
      .catch( (err)=> {
        console.log('Some error occurred. Please try later!');
      })
      .finally( ()=> {
        console.log('It is over!');
      }); 
  }
}

//Delete Post by postId
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios.delete(POSTS_API_URL+'/'+postId)
      .then(response => {
        //without util method, you can try like the following
        // this will hit the postReducer
        dispatch({
          type: DELETE_POST,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};