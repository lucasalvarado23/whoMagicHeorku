import React, { Component } from 'react';
import history from './history';
import { Navbar, Button } from 'react-bootstrap';
import Jumbotron from './components/Jumbotron';
import MyCarousel from './components/MyCarousel';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;





    //console.log("hello from app.js: " + JSON.stringify(this.props));
    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
            
              <a href="Home">Who Magic</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button >
            {
              !isAuthenticated() && (
              <div>
                  <Button
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
          <div>

             <Jumbotron />
             <div className="container">
              <h2>Welcome</h2>
                 <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat orci eu nulla sagittis, pulvinar dignissim lectus consequat. Etiam in lobortis ligula, vitae ornare lacus. Vivamus scelerisque lorem arcu, vitae eleifend ex commodo a. Quisque rutrum, augue sit amet egestas efficitur, magna nulla lacinia elit, sed suscipit tortor erat vitae enim. Donec egestas odio id aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque mi dolor, egestas nec lacinia non, sodales eu lacus. Donec ultricies nec elit ac ornare. Quisque fermentum ligula ut feugiat cursus. Aliquam auctor suscipit ex a lacinia. Mauris sollicitudin, justo quis fringilla finibus, dui diam ullamcorper nulla, sit amet placerat justo neque quis quam. Praesent nec nibh at tortor ornare dignissim. Morbi tincidunt fringilla turpis at luctus. Vivamus dapibus ligula eget pellentesque luctus. Maecenas ut consectetur lacus, non dignissim nisi. Praesent sodales tellus sit amet faucibus tempus.
                 </p>
                 <p>
                  Maecenas dapibus, est posuere eleifend rutrum, lectus ligula gravida urna, at pretium dui turpis non lorem. Donec pretium lorem ipsum, at fermentum nibh consequat facilisis. Sed maximus massa est, vel porta diam placerat id. Vivamus imperdiet lorem eget dolor bibendum, eget gravida tellus interdum. Sed lectus odio, condimentum eu porttitor vel, euismod sit amet urna. Nam quis dui a nibh rhoncus aliquam vitae in metus. Nam sit amet semper turpis. Suspendisse eu malesuada tortor, vel lacinia nisl. Phasellus ultrices vehicula magna, sed tempor neque dapibus quis. Phasellus urna justo, sollicitudin ac odio eget, convallis varius nulla. Vivamus in lacinia lorem, at eleifend nulla. Nulla nec luctus purus. Integer id purus mauris. Phasellus finibus ultricies erat a tempus. Nulla luctus sem nec justo venenatis, eu faucibus purus congue.
                 </p>
                 <MyCarousel />
                 <Footer />
             </div>
            </div>
            </div>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'Event')}
                  >
                    Event
                  </Button>
                )
            }
             {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'EventInfo')}
                  >
                    Event Info
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

