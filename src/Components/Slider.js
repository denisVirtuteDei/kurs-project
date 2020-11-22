import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import city from '../city.jpg';



export default function Slider() {
   
    return(
    <Carousel>
        <CarouselItem style={{'height' : '881px'}}>
            <img
                className="d-block w-100"
                src={city}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Do nothing</p>
            </Carousel.Caption>
        </CarouselItem>

        <CarouselItem style={{'height' : '881px'}}>
            <img
                className="d-block w-100"
                src={city}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Do nothing</p>
            </Carousel.Caption>
        </CarouselItem>

        <CarouselItem style={{'height' : '881px'}}>
            <img
                className="d-block w-100"
                src={city}
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Web Developer Blog</h3>
                <p>Do nothing</p>
            </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    
    )
}