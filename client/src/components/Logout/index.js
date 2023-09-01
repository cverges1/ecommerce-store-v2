import React from 'react';
import Auth from '../../utils/auth';

function Logout() {
  return (
    <a href="/" onClick={() => Auth.logout()}>
      Logout
    </a>
  );
}

export default Logout;
