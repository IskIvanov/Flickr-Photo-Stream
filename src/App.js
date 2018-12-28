import React, { Component } from 'react';
import FlickrImage from './flickrImage/FlickrImage';
import './App.css';
import axios from 'axios';
import Title from './Title/Title';
import Description from './Description/Description';
import Tags from './Tags/Tags'; 

class App extends Component {

  constructor(){
    super();
    this.state = {
      items: [],
    };
  }
// Find out how to use Fetch API
componentDidMount(){
  this.fetchWitchAxios();
}

fetchWitchAxios() {
  this.serverRequest =
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => {
        this.setState({
              items: response.data.data
          })    
      })
      .catch(error => {
        console.log("Error: " + error);
      })
}

  render() {
    return (
      <div className="App">
      <h1>React WORKS</h1>
        <FlickrImage />
        <Title />
        <Description />
        <Tags />
      </div>
    );
  }
}

export default App;
