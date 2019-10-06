import React, { Component } from 'react';
import "./style/categories.css";
import {Link} from 'react-router-dom';

export default class Categories extends Component {
  render() {
    return (
      <div className="categories_list">
        <div className="container">
          <Link to={'/tests/category'}>
            <div className="category">
              <h2>Category Name</h2>
            </div>
          </Link>
          <Link to={'/tests/category'}>
            <div className="category">
              <h2>Category Name</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}