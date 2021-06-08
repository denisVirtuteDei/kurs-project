import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import EmployeeLayout from './EmployeeLayout'
import AdminLayout from './AdminLayout'
import { TaxpayersMaket } from './TaxpayersLayout'

const UserCabinet = () => {
  const authInfo = useSelector(state => state.authorization)

  return (
    <Route
      render={() =>
        authInfo.access_token ? (
          <Switch>
            <Route path='/im/employees'>
              <EmployeeLayout />
            </Route>
            <Route path='/im/taxpayers'>
              <TaxpayersMaket />
            </Route>
            <Route path='/im/admin'>
              <AdminLayout />
            </Route>
          </Switch>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  )
}

export default UserCabinet
