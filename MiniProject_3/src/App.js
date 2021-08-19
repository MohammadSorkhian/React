import React, { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/authContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect( ()=> {
    if(localStorage.getItem("isLogedIn") === "1") setIsLoggedIn(true);
  }, [])

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLogedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLogedIn");
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn:isLoggedIn,
      logoutHandler: logoutHandler
    }}>
      <MainHeader></MainHeader>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
