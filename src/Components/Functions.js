import React from 'react'
import { Card, CardImg, Collapse, Container, Row, Button, Col } from 'react-bootstrap';
import city from '../city.jpg';

export const Function = () => {
    return (
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <CardImg variant="top" src={city} />
                        <Card.Body>
                            <Card.Title>Wan't</Card.Title>
                            <Card.Text>
                                To do nothing?.
                        </Card.Text>
                            <button variant="primary">Learn more</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <CardImg variant="top" src={city} />
                        <Card.Body>
                            <Card.Title>Why</Card.Title>
                            <Card.Text>
                                Do nothing?
                        </Card.Text>
                            <button variant="primary">Learn more</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <CardImg variant="top" src={city} />
                        <Card.Body>
                            <Card.Title>Where</Card.Title>
                            <Card.Text>
                                To do nothing?
                        </Card.Text>
                            <button variant="primary">Learn more</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}