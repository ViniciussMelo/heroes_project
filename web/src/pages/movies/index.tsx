import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

import firstMovie from './images/firstMovie.jpg';
import secondMovie from './images/secondMovie.jpg';
import thirdMovie from './images/thirdMovie.jpg';
import fourthMovie from './images/fourthMovie.jpg';
import fifthMovie from './images/fifthMovie.jpg';
import sixthMovie from './images/sixthMovie.jpg';
import seventhMovie from './images/seventhMovie.jpg';
import eighthMovie from './images/eighthMovie.jpg';

const imageStyle = {
  height: '90vh',
  color: '#fff',
  lineHeight: '80px',
  textAlign: 'center' as const,
  background: '#364d79',
  width: 'inherit',
  position: 'relative' as const,
  zIndex: 2
};

const Movies = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img style={imageStyle} src={firstMovie} id="firstMovie" alt="firstMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={secondMovie} id="secondMovie" alt="secondMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={thirdMovie} id="thirdMovie" alt="thirdMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={fourthMovie} id="fourthMovie" alt="fourthMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={fourthMovie} id="fourthMovie" alt="fourthMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={fifthMovie} id="fifthMovie" alt="fifthMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={sixthMovie} id="sixthMovie" alt="sixthMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={seventhMovie} id="seventhMovie" alt="seventhMovie"/>
        </div>
        <div>
          <img style={imageStyle} src={eighthMovie} id="eighthMovie" alt="eighthMovie"/>
        </div>
      </Carousel>
    </div>
  )
};

export default Movies;