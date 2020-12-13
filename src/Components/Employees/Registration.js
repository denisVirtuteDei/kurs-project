import React from "react";
import { Container, Form, Tabs, Tab } from "react-bootstrap";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import EntityRegPart from './Reg/EntityRegPart'
import IndividRegPart from './Reg/IndividRegPart'
import SelfRegPart from './Reg/SelfRegPart'

const Registration = () => {

  const enterClick = () => {
    if (key.includes('f'))
      console.log('f');
    if (key.includes('s'))
      console.log('s');
    if (key.includes('t'))
      console.log('t');

  }

  const [key, setKey] = React.useState('f');

  return (
    <Container>
      <Toolbar />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="f" title="Entity">
          <EntityRegPart />
        </Tab>
        <Tab eventKey="s" title="Self">
          <SelfRegPart />
        </Tab>
        <Tab eventKey="t" title="Individ">
          <IndividRegPart />
        </Tab>
      </Tabs>
      <Button color="primary" variant="contained" style={{ float: "right", margin: "15px" }} onClick={enterClick}>enter</Button>
    </Container>
  );
}

export default Registration


