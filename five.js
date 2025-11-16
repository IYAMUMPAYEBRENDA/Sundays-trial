import React, { useState } from 'react';

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome User!</h1>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}

