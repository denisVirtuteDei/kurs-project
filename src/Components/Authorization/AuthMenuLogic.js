import React from 'react'
import UserMenu from './UserMenu'
import LogInMenu from './LogInMenu'
import { useSelector } from 'react-redux'

const AuthMenuLogic = props => {
  const authInfo = useSelector(state => state.authorization)

  return (
    <div>{authInfo.access_token ? <UserMenu {...authInfo} /> : <LogInMenu {...authInfo} />}</div>
  )
}

export default AuthMenuLogic
