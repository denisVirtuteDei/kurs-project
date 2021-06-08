import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import develope from '../../develope.jpg'

export default function Slider() {
  return (
    <Carousel>
      <CarouselItem style={{ height: '600px' }}>
        <img className='d-block w-100' src={develope} alt='First slide' />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Tax Office</h3>
          <p style={{ color: 'black' }}>Welcome</p>
        </Carousel.Caption>
      </CarouselItem>
    </Carousel>
  )
}
