import React from 'react';
import { Function } from './Functions'
import Slider from './Slider';
import Jumbotron from './Jumbotron';

export const Home = () => {
  return (
    <div>
      <Slider />
      <Function />
      <Jumbotron />
    </div>
  );
}