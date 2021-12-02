import React, { Component } from 'react'
import Lang from './assets/lang.png'
import styles from './Blog1.module.css'

class Blog1 extends Component {
    render() {
        return (
            <div>
                <h1>Language Competition:<br/>An Abrams-Strogatz inspired agent-based model</h1>
                <img src={Lang} className={styles.titlePic}/>
            </div>
        )
    }
}

export default Blog1
