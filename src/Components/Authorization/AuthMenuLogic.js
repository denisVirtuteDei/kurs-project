import React from 'react';
import UserMenu from './UserMenu'
import LogInMenu from './LogInMenu'


const AuthMenuLogic = (props) => {


  return (
    <div>
      {
        props.authInfo.currentUserAccessLevel === 'anon' ?
          <LogInMenu setAccessLevel={props.setAccessLevel} currentUserAccessLevel={props.currentUserAccessLevel} /> :
          <UserMenu setAccessLevel={props.setAccessLevel} authInfo={props.authInfo} />
      }
    </div>
  );
}

export default AuthMenuLogic;