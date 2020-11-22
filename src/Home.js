import React from 'react';
import { Card, CardImg, Collapse, Container, Row, Button, Col } from 'react-bootstrap';
import Slider from './Components/Slider';
import Jumbotron from './Components/Jumbotron';
import city from './city.jpg';

export const Home = () =>  (
  <>
    <Slider />
    <Container style={{paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
            <Col>
                <Card style={{width: '18rem'}}>
                    <CardImg variant="top" src={city} />
                    <Card.Body>
                        <Card.Title>WebDev Blog</Card.Title>
                        <Card.Text>
                            Momento morry.
                        </Card.Text>
                        <button variant="primary">Learn more</button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <CardImg variant="top" src={city} />
                    <Card.Body>
                        <Card.Title>WebDev Blog</Card.Title>
                        <Card.Text>
                            Momento morry.
                        </Card.Text>
                        <button variant="primary">Learn more</button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{width: '18rem'}}>
                    <CardImg variant="top" src={city} />
                    <Card.Body>
                        <Card.Title>WebDev Blog</Card.Title>
                        <Card.Text>
                            Momento morry.
                        </Card.Text>
                        <button variant="primary">Learn more</button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <Jumbotron/>
    
    <Container>
        <Row>
            <Col md={7}>
                <img src={city} height={300} />
            </Col>
            <Col md={5}>
            <h2>Web Developer Blog</h2>
            <p>
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            sdfsdfsdfbfsgsdfgsdfg sdfsdfasdfsdfsdfsdfbfsgsdfgsdfg 
            </p>
            </Col>
        </Row>
    </Container>
  </>
)
