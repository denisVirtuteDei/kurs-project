import React, { useEffect, useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import Toolbar from '@material-ui/core/Toolbar'
import EntityRegPart from './Reg/EntityRegPart'
import IndividRegPart from './Reg/IndividRegPart'
import SelfRegPart from './Reg/SelfRegPart'
import { useDispatch } from 'react-redux'
import { fetchAllNceaInfo } from '../../Redux/Actions/NceaInfoAction'

function generatePassword() {
  var length = 5,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    retVal = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

const Registration = () => {
  const dispatch = useDispatch()
  const [key, setKey] = useState('f')

  useEffect(() => {
    dispatch(fetchAllNceaInfo())
  }, [])

  return (
    <Container>
      <Toolbar />
      <Tabs id='controlled-tab-example' activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey='f' title='Entity'>
          <EntityRegPart generatePassword={generatePassword} />
        </Tab>
        <Tab eventKey='s' title='Self'>
          <SelfRegPart generatePassword={generatePassword} />
        </Tab>
        <Tab eventKey='t' title='Individ'>
          <IndividRegPart generatePassword={generatePassword} />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Registration
