import React from 'react'
import { Card, CardImg, Carousel, CarouselItem, Col, Row } from 'react-bootstrap'
import { Container } from '@material-ui/core'
import jiza from './assets/img/photo1.jpg'
import afternoon from './assets/img/photo2.jpg'
import mood from './assets/img/photo3.jpg'
import placat from './assets/img/photo4.jpg'
import someQ from './assets/img/photo5.jpg'
import bigQ from './assets/img/photo6.jpg'

const pussyImages = [
    { img: afternoon, title: 'Последняя ночь перед курсовой' },
    { img: jiza, title: 'После сдачи курсовой' },
    { img: bigQ, title: 'Зачем' }
]

const pussyImages2 = [
    { img: mood, title: 'Тут всё ясненько' },
    { img: placat, title: 'Тут тоже' },
    { img: someQ, title: 'А тут есть вопросы' }
]

const PussyPage = (props) => {
    debugger;
    return (
        <Container>
            <Row>
                {
                    pussyImages.map(i => {
                        return (
                            <Col>
                                <Card style={{ width: '17rem', height: '25rem', margin: '1rem', padding: '1rem' }} id={"card" + i.title}>
                                    <CardImg variant="top" src={i.img} />
                                    <Card.Body>
                                        <Card.Title>{i.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }

            </Row>
            <Row>
                {
                    pussyImages2.map(i => {
                        return (
                            <Col>
                                <Card style={{ width: '17rem', height: '25rem', margin: '1rem', padding: '1rem' }} id={"card" + i.title}>
                                    <CardImg variant="bottom" src={i.img} />
                                    <Card.Body>
                                        <Card.Title>{i.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

        </Container>
    )
}

export default PussyPage;

{/* <CarouselItem style={{ margin: '10px', height: '500px' }}>
                            <img
                                id={"img" + i.title}
                                className="d-block w-100"
                                src={i.img}
                                alt="First slide"
                                style={{position: 'absolute'}}
                            />
                            <Carousel.Caption>
                                <h3>{i.title}</h3>
                            </Carousel.Caption>
                        </CarouselItem> */}