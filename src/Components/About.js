import React, { Component, Container } from 'react';
import styled from 'styled-components'
import { store } from '../Actions/Store.js'
import { Provider } from 'react-redux'
import EntityComponent from './EntityPersonsComponent/EntityComponent';


// let Style = styled.div`
// video {
//   object-fit: cover;
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
// }
// `

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Provider store={store}>
          <EntityComponent />
        </Provider> */}
      </div>
    )
  }
};

export const About = () => {
  return (
    <Example/>
  )
}
