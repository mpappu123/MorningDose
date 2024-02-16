import React, { Component } from 'react';
import { Link, Outlet} from "react-router-dom";
export class Nav extends Component {
 
  render() {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    return(
      <div>
        <nav className="navbar">
            <Link className="logotxt" to="/">Navbar</Link>
        </nav>
       <div className="categories">
        <ul className="catUl">
        {categories.map((category, index) => (
          <li key={index} className="catLi">
            <Link className="catLink" to={`/${category}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
       </div>
       <Outlet/>
      </div>
      )
  }
}

export default Nav;