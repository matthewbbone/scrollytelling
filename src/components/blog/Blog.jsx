import React, { Component, useRef } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Blogs } from './BlogData'
import styles from './Blog.module.css'
import CommDetect from '../../assets/blogImage/commDetect.png'
import LeftArrow from '../../assets/icons/leftarrow.jpg'
import RightArrow from '../../assets/icons/rightarrow.jpg'



const BlogThumbnail = (blog, index) => {

    return (
        <li className={styles.thumbnail} key={index}>
            <Link className={styles.thumbnailLink} to={"/blog/" + index}>
                <div className={styles.thumbnailBox}>
                    <img src={CommDetect} width="150px" height="100px" />
                    <div className={styles.thumbnailText}>{blog.shortTitle}</div>
                </div>
            </Link>
        </li>
    )
}

const BlogList = () => {

    const scroller = useRef(null)

    const scroll = (dir) => {
        if (scroller.current) {
            const end = scroller.current.scrollLeft + (dir == 'left' ? -200 : 200)
            scroller.current.animate(
                [
                    { scrollLeft: scroller.current.scrollLeft},
                    { scrollLeft: end }
                ],
                { duration: 100 }
            );

            let ctr = 1.6

            const frame = () => {
                ctr = ctr - .005 
                if (scroller.current) {
                    if (
                        scroller.current.scrollLeft >= end ||
                        scroller.current.scrollLeft >= scroller.current.scrollWidth - 380
                    ) {
                        clearInterval(int);
                        return null
                    } else {
                        scroller.current.scrollLeft = scroller.current.scrollLeft + Math.pow(ctr, 4)
                    }
                }
            }
            const int = setInterval(frame, 5)
        }
    }

    return (
        <div className={styles.blogListBox}>
            <img className={styles.arrow} src={LeftArrow} width="15px" height="30px" onClick={() => scroll('left')}/>
            <ul className={styles.blogList} ref={scroller}>
                {Blogs.map((b, index) => {
                    return BlogThumbnail(b, index)
                })}
            </ul>
            <img className={styles.arrow} src={RightArrow} width="15px" height="30px" onClick={() => scroll('right')}/>
        </div>
    )
}

class Blog extends Component {
    render() {
        return (
            <div>
                <BlogList />
                <Route exact path="/blog/:id" component={BlogPost} />
            </div>
        )
    }
}
export default Blog;