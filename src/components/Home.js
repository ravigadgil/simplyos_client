import React, { Component } from 'react';
import './style/home.css';
import {Link} from 'react-router-dom';
import Img1 from '../images/img_1.jpg';
import Img2 from '../images/img2.jpg';

export default class Home extends Component {
  openSearch = (e) => {
    const query = document.querySelector('.form-control').value;
    if(query.length > 0 && query.replace(" ", "").length > 0) {
      window.location.href = '/search/' + query
    }
    e.preventDefault();
  }
  render() {
    return (
      <div className="home_content">
        <div className="search" style={{backgroundImage: `url(${Img1})`}}>

        </div>
        <div className="tests_categories">
          <div className="search_content">
            <h4 style={{color: "#ffff"}}>Search your test</h4>
            <form onSubmit={this.openSearch}>
              <input class="form-control" type="text"
                aria-label="Search" style={{background: 'transparent', color: 'white'}} />
            </form>
          </div>
        </div>
        <div className="search1" style={{backgroundImage: `url(${Img2})`}}>
        </div>
      </div>
    );
  }
}