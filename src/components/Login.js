import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './style/login.css';

export default class Login extends Component {
  refresh = () => {
    window.location.reload();
  }
  render() {
    const responseFacebook = (response) => {
      localStorage.setItem("username", response.name);
      window.location.href = "/";
    }
    const responseGoogle = (response) => {
      console.log(response);
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
          clientId="	
          230260488335-a7v8k9vs0cv1fejq8p3hdrekmcvu1r53.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}