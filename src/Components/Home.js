import React from 'react';

import { Function } from './Functions'
import { Slider } from './Slider';
import Jumbotron from './Jumbotron';

export const Home = () => {
  return (
    <div>
      <Slider />
      <Function />
      <Jumbotron />

      {/* <Container>
        <Row>
          <Col md={7}>
            <img src={city} height={300} />
          </Col>
          <Col md={5}>
            <h2>Web Developer Blog</h2>
            <p>

            </p>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}