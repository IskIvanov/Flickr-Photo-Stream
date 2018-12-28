import React from 'react';
import Gif from './Gif';

const FlickrImage = props => {
  
  const results = props.data;
  let gifs = results.map(gif =>
    <Gif url={gif.images.fixed_height.url} key={gif.id} />
  );
  

  return(
    <ul className="gif-list">
      {gifs}
    </ul>
  );
}
export default FlickrImage;