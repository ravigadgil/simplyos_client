import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './style/login.css';

export default class Login extends Component {
  refresh = () => {
    window.location.reload();
  }

  componentDidMount() {
    if(localStorage.getItem('username')) {
      window.location.href = '/';
    }
  }

  render() {
    const responseFacebook = (response) => {
      localStorage.setItem("username", response.name);
      window.location.href = "/";
    }
    const responseGoogle = (response) => {
      localStorage.setItem("username", response.w3.ig);
      window.location.href = "/";
    }
    return (
      <div className="login_content">
         <FacebookLogin
          buttonStyle={{margin: 10, width: 300}}
          appId="2420121594869375" 
          fields="name,email,picture"
          callback={responseFacebook}
          />
          <GoogleLogin
          clientId="230260488335-ocfsijdhr2n38ukt2tc7bigtudhea458.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}