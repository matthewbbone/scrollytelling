import React from 'react';
import { Navbar, Button} from 'react-bootstrap';

const styles = require('./header.css');

function WebHeader() {
    return (
        <header style={styles}>
            <Navbar bg="light" expand="lg">
                <Button>Home</Button>
                <Button>Blog</Button>
            </Navbar>
        </header>
    )
}

export default WebHeader;