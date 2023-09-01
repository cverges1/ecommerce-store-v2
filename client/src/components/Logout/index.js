import React from 'react';
import Auth from '../../utils/auth';

// Component for the logout link
function Logout() {
  return (
    <a href="/" onClick={() => Auth.logout()}>
      Logout
    </a>
  );
}

export default Logout;
