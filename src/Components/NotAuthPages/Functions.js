import React from 'react'
import { Card, CardImg, Container, Row, Col } from 'react-bootstrap';
import office from '../../tax-office.jpg';

const Function = () => {
    return (
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <CardImg variant="top" src={office} />
                        <Card.Body>
                            <Card.Title>Wan't</Card.Title>
                            <Card.Text>
                                To do nothing?.
                        </Card.Text>
                            <button variant="primary">Execute</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <CardImg variant="top" src={office} />
                        <Card.Body>
                            <Card.Title>Why</Card.Title>
                            <Card.Text>
                                Do nothing?
                        </Card.Text>
                            <button variant="primary">Execute</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <CardImg variant="top" src={office} />
                        <Card.Body>
                            <Card.Title>Where</Card.Title>
                            <Card.Text>
                                To do nothing?
                        </Card.Text>
                            <button variant="primary">Execute</button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Function;