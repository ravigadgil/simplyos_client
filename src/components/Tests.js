import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style/tests.css';

export default class Tests extends Component {
  render() {
    return (
      <div>
        <div className="categories_list">
        <div className="container">
          <Link to={'/test/test_id'}>
            <div className="test">
              <h2>Test Name</h2>
            </div>
          </Link>
          <Link to={'/test/test_id'}>
            <div className="test">
              <h2>Test Name</h2>
            </div>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}