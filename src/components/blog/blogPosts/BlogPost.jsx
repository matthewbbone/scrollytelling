import React, { Component } from 'react';
import Directory from './directory/Directory'

const BlogPost = ({ match }) =>  {
    const Blog = Directory[match.params.id]
    return (
        <Blog></Blog>
    ) 
}

export default BlogPost;