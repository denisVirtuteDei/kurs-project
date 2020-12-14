import React from "react";
import { Container, Form, Tabs, Tab } from "react-bootstrap";
import Toolbar from '@material-ui/core/Toolbar';
import EntityRegPart from './Reg/EntityRegPart'
import IndividRegPart from './Reg/IndividRegPart'
import SelfRegPart from './Reg/SelfRegPart'

function generatePassword() {
  var length = 5,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

const Registration = (props) => {

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
          <EntityRegPart createEntity={props.createEntity} generatePassword={generatePassword} />
        </Tab>
        <Tab eventKey="s" title="Self">
          <SelfRegPart  generatePassword={generatePassword} />
        </Tab>
        <Tab eventKey="t" title="Individ">
          <IndividRegPart />
        </Tab>
      </Tabs>
      
    </Container>
  );
}

export default Registration


