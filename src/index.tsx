import WebHeader from './header/header';
import Home from './home/home';
import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const head = document.getElementById('head')
const body = document.getElementById('body')

ReactDom.render(<WebHeader/>, head)
ReactDom.render(<Home/>, body)