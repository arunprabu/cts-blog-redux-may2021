import React, { Component } from 'react';
// Step 10. use connect from react-redux
import { connect } from 'react-redux';
import { createPost } from '../services/postService';

class PostForm extends Component {

  // Step 9: submission logic
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getContent.value);
    const formData = {
      title: this.getTitle.value,
      body: this.getContent.value
    }
    
   this.props.dispatch(createPost( formData )); // this is the service method


  }

  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Create Post!</h3>
            <form className='text-left' onSubmit={this.handleSubmit}>
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control'
                ref={(input) => this.getTitle = input} /><br />
              {/* Step 9: Working on form element with ref */}
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control'
                ref={(input) => this.getContent = input} /><br />
              {/* Step 9: Working on form submission */}
              <button className='btn btn-primary' type='submit'>Add Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// Step 10.1
  //last line of the component should be the following. 
  // after connecting props will be available in this component. 
  // props will have dispatch method
export default connect()(PostForm);