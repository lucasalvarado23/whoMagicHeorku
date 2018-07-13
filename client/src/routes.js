import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Event from './Event/Event';
import EventInfo from './EventInfo/EventInfo';
import Details from './Attending/Attending';
import Register from './Register/Register';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/Home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/Event" render={(props) => <Event auth={auth} {...props} />} />
           <Route path="/EventInfo" component={EventInfo} />
           <Route path="/Attending" component={Details} />
           <Route path="/Register" render={(props) => <Register auth={auth} {...props} />} />

          <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/Home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>
  );
}