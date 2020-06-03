import React, { Component } from 'react';

// import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// import {Cards, Chart, CountryPicker, Navbar} from './components'
import {Navbar,Home} from './components'


import styles from './App.module.css' //no interference with css files
// import {fetchData} from './api' //No need to specify full path. Immediately looks for the index.js file within the api folder.

// const jwt = require('jsonwebtoken') 
class App extends Component {

  render() { 
    return ( 
    <div className = {styles.container}> 
       <BrowserRouter>
       <Navbar/> 
       {/* <Home className = {styles.container}></Home> */}
      </BrowserRouter>
    </div> );
  }
}
 
export default App;