import React, { Component } from 'react';
// import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
// import {Cards, Chart, CountryPicker, Navbar} from './components'
import Cards from '../Cards/Cards'
import Chart from '../Chart/Chart'
import {fetchData} from '../../api' //No need to specify full path. Immediately looks for the index.js file within the api folder.
// import styles from './Home.module.css'
// const jwt = require('jsonwebtoken') 
class Home extends Component {
  state = { 
    data: {},
    country: ''
   }
  async componentDidMount(){
    const fetchedData = await fetchData();
    // console.log(fetchedData);

    this.setState(
      {
        data: fetchedData
      }
    )
  }
  render() { 
    return ( 
    <div > 
      <Cards  data = {this.state.data}></Cards>
      <Chart data={this.state.data} country={this.state.country}/>
        {/* <CountryPicker/> */}
    </div> );
  }
}
 
export default Home;