import React, { Component } from 'react';

const BlogPost = ({ match }) => <p>Blog Post {match.params.id}</p>

export default BlogPost;