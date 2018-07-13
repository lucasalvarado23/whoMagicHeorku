import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from "../utils/API";
import history from '../history';
import './style.css';
import { stringify } from 'querystring';

class Home extends Component {
  state = {
    userName: ""
  };
//bring in user profile from auth
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;

    getProfile((err, profile, cb) => {
      this.regCheck(profile.email);
    });
    
  }


  regCheck = (email) => {
    API.registerCheck(email)
      .then(response => {
          //if email is not in the database
          if(response.data == null){
            window.location.replace(`/Register`);
            //if email is in the database
          }else{
            //get user name
            let username = response.data.userName;
             //capitalize user name
             username = username.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
            //set userName state
             this.setState({ userName: username })
          }
      })
      .catch(error => { 
          console.log(error.response);
      })
  }

  login = () => {
    this.props.auth.login();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    const { profile } = this.state; //user profile info
   // const { userInfo } = this.state.userInfo;

    console.log("in the render: " + this.state.userName);

  


    return (
      <div className="container bg">
        {
          isAuthenticated() && (
              <h3 className="capital">
                Welcome {this.state.userName}, <br /><br /> 
                <span className="center">Create a new event</span>{' '}
                <Link to="Event"> new event</Link>
                <br/><br />
                 <input className="center" placeholder="Enter an Event Code"></input> <br />
              
                <br />
              </h3> 
              
              
            )
        }
        {
          !isAuthenticated() && (
              <p></p>
            )
        }
      </div>
    );
  }
}

export default Home;