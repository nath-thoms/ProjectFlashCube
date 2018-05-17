import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Topic from './components/Topic';
import Topics from './components/Topics';
import Grid from './components/Grid';
import Achievements from './components/Achievements';

class App extends Component {

  state = {
    userProfile: { id : '' }
  }

  render() {
    const { userProfile } = this.state;
    return (
      <Router>
        <div className="App" >
          <Route path="*" render={(props) => {
              return <Nav {...props} userProfile={userProfile} />
              }}/>
          <Route exact path="/" render={(props) => {
              return <Home {...props} userProfile={userProfile} />
              }} /> 
          <Route exact path="/topics" render={(props) => {
              return <Topics {...props} userProfile={userProfile} />
              }} />
          <Route path="/topics/:topic" render={(props) => {
              return <Topic {...props} userProfile={userProfile} />
              }} />
          <Route path="/topics/:topic/learn" render={(props) => {
              return <Grid {...props} userProfile={userProfile} type="learn" />
              }} />  
          <Route path="/topics/:topic/test" render={(props) => {
              return <Grid {...props} userProfile={userProfile} type="test" />
              }} />  
          <Route path="/users/:userId/achievements" render={(props) => {
            return <Achievements {...props} userProfile={userProfile} logout={this.logout}/>
            }} />  
          <Route exact path="/users//achievements" render={(props) => {
            return <Achievements {...props} userProfile={userProfile} logout={this.logout}/>
            }} /> 
        </div>
      </Router>
    );
  }

  login = (userProfile) => {
    this.setState({
      userProfile
    })
  }

  logout = () => {
    this.setState({
      userProfile: { _id : ''}
    })
  }
  

}

export default App;
