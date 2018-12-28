import React, { Component } from 'react';
import FlickrImage from './flickrImage/FlickrImage';
import './App.css';
import Title from './Title/Title';
import Description from './Description/Description';
import Tags from './Tags/Tags'; 

class App extends Component {

  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }
// Find out how to use Fetch API

componentDidMount(){
  // this.fetchData();
  
  this.fetchWitchAxios();
  
   }

fetchWitchAxios(){
  this.serverRequest =
    axios
      .get('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
      .then(function(result) {
          this.setState({
              items: result.items
          })
  })
}
   
// Trying Fetch API to fetch data from flickr publick api
// fetchData (){
//   fetch('https://api.flickr.com/services/feeds/photos_public.gne?format=json')
//     .then(response => response.json())
//     .then(json => console.log(json))
//    .catch(error => console.log('parsing failed', error))
//   }

  render() {
    return (
      <div className="App">
        <FlickrImage />
        <Title />
        <Description />
        <Tags />
      </div>
    );
  }
}

export default App;
