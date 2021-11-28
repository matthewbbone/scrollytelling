import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class Blog extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="navButton"><Link to="/blog/1">Blog 1</Link></li>
                    <li className="navButton"><Link to="/blog/2">Blog 2</Link></li>
                    <li className="navButton"><Link to="/blog/3">Blog 3</Link></li>
                    <li className="navButton"><Link to="/blog/4">Blog 4</Link></li>
                </ul>
                <Route exact path="/blog/:id" component={BlogPost} />
            </div>
        )
    }
}
export default Blog;