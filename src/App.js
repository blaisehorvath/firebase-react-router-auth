import React, { useContext, useEffect, useState } from 'react';
import './App.css';

// routing
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import PrivateRoute from "./routing/PrivateRoute"

// contexts, hooks
import { LoginContext } from "./login/loginContext"
import { FirebaseContext } from "./firbase/firebaseContext"

// pages
import LoginPage from "./pages/LoginPage"
import PrivatePage from "./pages/PrivatePage"
import { listenToAuthStateChanged } from "./firbase/authStateChange"

function App() {
  const firebaseApp = useContext(FirebaseContext)
  const [loginState, setLoginState] = useState({ user: null, isLoading: true })
  const loginContextValue = { loginState, setLoginState }

  useEffect(() => {
    listenToAuthStateChanged(firebaseApp, setLoginState)
  }, [firebaseApp, setLoginState])

  return (
    <LoginContext.Provider value={loginContextValue}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <PrivateRoute exact path="/protected" component={PrivatePage}/>
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
