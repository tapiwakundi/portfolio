import React, { Component } from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intuition from './pages/Intuition';
import Chatapp from './pages/Chatapp';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';



export default class App extends Component {
  render() {
    return (
        <Router>
          <Route path='/' exact component={Home} />
          <Route path='/intuition' exact component={Intuition} />
          <Route path='/chatapp' exact component={Chatapp} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogpost' exact component={BlogPost} />
        </Router>
    )
  }
}

