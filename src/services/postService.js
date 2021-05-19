import axios from 'axios';
import { ADD_POST } from "../actions/types";
const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

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