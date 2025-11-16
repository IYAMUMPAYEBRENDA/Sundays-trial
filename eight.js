import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <h1>Welcome, {user.name}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

function LoginButton() {
  const { setUser } = useContext(UserContext);

  return (
    <button onClick={() => setUser({ name: 'John Doe' })}>
      Login
    </button>
  );
}

function App() {
  return (
    <UserProvider>
      <UserProfile />
      <LoginButton />
    </UserProvider>
  );
}

