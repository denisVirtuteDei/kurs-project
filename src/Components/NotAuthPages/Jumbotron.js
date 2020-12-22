import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import stonks from '../../maxresdefault.jpg';
import styled from 'styled-components'

const Styles = styled.div`
         .jumbo {
            background: url(${stonks}) no-repeat fixed bottom;
            backgound-size: cover;
            color: #efefef;
            height: 250px;
            position relative;
            z-index -2;
        }
        .overlay {
            background-color: #000;
            opacity: 0.6;
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
            <div className="overlay"/>
            <Container>
                <h1>
                    B. Franklin
                </h1>
                <p>
                    Неизбежны только смерть и налоги
                </p>
            </Container>
        </Jumbo>
    </Styles>

)
export default Jumbotron;