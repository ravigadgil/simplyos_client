import React, { Component } from 'react';
import './style/navbar.css';
import {Link} from 'react-router-dom';

export default class Navbar  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar_visible: false,
      isLoggedIn: localStorage.getItem('username') ? true : false,
      loggedInText: localStorage.getItem('username') ? "Log Out" : 'Log In',
      loggedInPath: localStorage.getItem('username') ? '' : '/login',
    }
  }

  hideNavbar = () => {
    document.querySelector('.navbar').style.marginLeft = "0px"
    document.querySelector('.navbar_content').style.marginLeft = "-250px"
    this.setState({navbar_visible: false});
  }

  logOut = () => {
    if(this.state.isLoggedIn) {
      localStorage.removeItem('username');
      window.location.href = "/";
    } else {
      this.hideNavbar();
    }
  }

  make_navbar_visible = () => {
    if(this.state.navbar_visible) {
      document.querySelector('.navbar').style.marginLeft = "0px"
      document.querySelector('.navbar_content').style.marginLeft = "-250px"
      document.querySelector('.navbar_toggle').id="no_rotate-text"
      this.setState({navbar_visible: false});
    } else {
      document.querySelector('.navbar').style.marginLeft = "250px"
      document.querySelector('.navbar_content').style.marginLeft = "0px"
      document.querySelector('.navbar_toggle').id="rotate-text"
      this.setState({navbar_visible: true});
    }
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <a style={{transition: '0.5s'}} id="no_rotate-text" class="navbar_toggle" onClick={this.make_navbar_visible}>&#x2630;</a>
        </div>
        <div className="navbar_content" >
          <div className="header" style={{borderBottom: '1px solid white'}}>
            <h3 style={{fontSize: 24}}>Simplyopensource</h3>
          </div>
          <Link to={'/'}>
            Home
          </Link>
          <Link to={'/categories'}>
            Categories
          </Link>
          <Link to={this.state.loggedInPath} onClick={this.logOut}>
            {this.state.loggedInText}
          </Link>
        </div>
      </div>
    );
  }
}