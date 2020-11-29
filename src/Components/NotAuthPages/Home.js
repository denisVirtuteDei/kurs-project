import React from 'react';
import Function from './Functions'
import Slider from './Slider';
import Jumbotron from './Jumbotron';

const Home = () => {
  return (
    <div>
      <Slider />
      <Function />
      <Jumbotron />
    </div>
  );
}

export default Home;