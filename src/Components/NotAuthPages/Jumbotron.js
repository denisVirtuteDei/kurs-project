import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import city from '../../city.jpg';
import styled from 'styled-components'

const Styles = styled.div`
         .jumbo {
            background: url(${city}) no-repeat fixed bottom;
            backgound-size: cover;
            color: #efefef;
            hieght: 400px;
            position relative;
            z-index -2;
        }
        .overlay {
            background-color: #000;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }
    `;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Web Developer Blog</h1>
                <p>
                    Налоговая представляет собой какую-то фигню
                    И не спрашивайте что и зачем. Спасибо.
            </p>
            </Container>
        </Jumbo>
    </Styles>

)
export default Jumbotron;