import React, { Component } from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './utils/ScrollToTop';
import ExperiencePage from './pages/ExperiencePage';




export default class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <ScrollToTop>
            <Route path='/' exact component={Home} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/blogpost' exact component={BlogPost} />
            <Route path='/experience/:id' exact render={props => <ExperiencePage{...props} />} />
          </ScrollToTop>
        </Switch>
      </Router>


    )
  }
}

