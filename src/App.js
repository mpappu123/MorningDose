
import React, { Component } from 'react'
import Nav from './components/Nav'
import News from './components/News'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const categories = ['business', 'entertainment', 'health', 'science', 'sports', 'technology','general'];
export default class App extends Component {
  render() {
      return (
        <div>
          <Router>
            <Nav />
            <Routes>
            <Route path="/" element={<News key='general' pageSize={9} country="in" category="general" />} />
              {categories.map((category) => (
                <Route path={`/${category}`} element={<News key={category} pageSize={9} country="in" category={category} />} />
              ))}
              
            </Routes>
          </Router>
        </div>
      );
  }
}

