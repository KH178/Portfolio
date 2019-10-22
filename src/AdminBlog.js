import React, { Component } from 'react';
import Form from './Form';

class AdminBlog extends Component {
    render() {
        return (
        <div className="container">
        <div className="row pt-5">
          <div className="col-12 col-lg-6 offset-lg-3">
            <h1 className="text-center">Blog</h1>
          </div>
          <Form />
        </div>
      </div>
        );
    }
}

export default AdminBlog;