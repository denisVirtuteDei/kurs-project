import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Grid from '@material-ui/core/Grid'
import LeftToolBar from './LeftToolBar'
import DebtInfo from './Taxpayers/DebtInfoPart'
import NewDeclaration from './Taxpayers/NewDeclarationPart'
import NewCheck from './Taxpayers/NewCheckPart'

const sidebarUrls = [
  {
    title: 'New declarations',
    url: '/im/taxpayers/declarations',
  },
  {
    title: 'New checks',
    url: '/im/taxpayers/checks',
  },
  {
    title: 'Debt info',
    url: '/im/taxpayers/debt_info',
  },
]

export const TaxpayersMaket = () => (
  <Container fluid='true'>
    <Grid container spacing={2} style={{ width: '100%' }}>
      <Grid className='justify-content-md-left' item xs={2}>
        <LeftToolBar sidebarUrls={sidebarUrls} />
      </Grid>
      <Grid item xs={10}>
        <Switch>
          <Route exact path='/im/taxpayers/declarations' component={NewDeclaration} />
          <Route exact path='/im/taxpayers/checks' component={NewCheck} />
          <Route exact path='/im/taxpayers/debt_info' component={DebtInfo} />
        </Switch>
      </Grid>
    </Grid>
  </Container>
)
