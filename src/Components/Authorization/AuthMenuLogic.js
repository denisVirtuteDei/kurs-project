import React from 'react';
import UserMenu from './UserMenu'
import LogInMenu from './LogInMenu'

const AuthMenuLogic = (props) => {

  return (
    <div>
      {
        props.authInfo.priority === 'anon' ? <LogInMenu {...props}/> : <UserMenu {...props} />
      }
    </div>
  );
}

export default AuthMenuLogic;