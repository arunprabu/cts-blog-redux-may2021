import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Step 16: using Connect from react-redux
import { connect } from 'react-redux';

import { getPosts } from '../services/postService';

class PostList extends Component {

  componentDidMount(){
    console.log('Inside componentDidMount');
    // send ajax calls to load all posts..
    // dispatch service method
    this.props.dispatch( getPosts() )
  }

  render() {
    console.log(this.props);
    let posts = null; 
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index )=> {
        return(
          <div className="list-group-item list-group-item-action text-start" key={index}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`posts/${post.id}`}>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1 text-left">
              {post.body}
            </p>
          </div>
        )
      })
    }

    return (
      <div className='container'>
        <h3>Post List</h3>
        <div className="list-group text-left">

          { this.props.posts && this.props.posts.length > 0? 
            posts
            :
            <div className='alert alert-warning'>
              Post Not Found! You can add one.
            </div>
          }
        </div>
      </div>
    )
  }
}

//mapStateToProps() method should be defined in the same file before the export
// using this method, we can convert state into props
const mapStateToProps = (state) => { // state is going to carry the entire store data
  return {
    posts: state.posts // post data only we need from the store
  }
}
/* 
The above function will convert state to props for the PostList compoent.
By doing the above, this comp will no longer have state.  
*/
export default connect(mapStateToProps)(PostList);