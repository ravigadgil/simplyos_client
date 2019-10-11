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
      if(response.name) {
        localStorage.setItem("username", response.name);
        window.location.href = "/";
      } else {

      }
    }
    const responseGoogle = (response) => {
      localStorage.setItem("username", response.w3.ig);
      window.location.href = "/";
    }
    return (
      <div className="login_content">
         <FacebookLogin
          style={{width: "300px"}}
          appId="2420121594869375" 
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="btnFacebook"
          />
          <br />
          <GoogleLogin
          width="300px"
          clientId="230260488335-ocfsijdhr2n38ukt2tc7bigtudhea458.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          cssClass="btnFacebook"
        />
      </div>
    );
  }
}