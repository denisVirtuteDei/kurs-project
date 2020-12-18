import React from 'react';
import UserMenu from './UserMenu'
import LogInMenu from './LogInMenu'

const AuthMenuLogic = (props) => {

  return (
    <div>
      {
        props.authInfo.access_token ? <UserMenu {...props} /> : <LogInMenu {...props} />
      }
    </div>
  );
}

export default AuthMenuLogic;