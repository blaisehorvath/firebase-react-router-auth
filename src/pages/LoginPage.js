import React, { useCallback, useContext } from "react";
import { FirebaseContext } from "../firbase/firebaseContext"
import { LoginContext } from "../login/loginContext"
import { useHistory } from "react-router"

export default function LoginPage() {
  const firebaseApp = useContext(FirebaseContext)
  const { setLoginState } = useContext(LoginContext)
  const history = useHistory()
  const loginHandler = useCallback(
    () => {
      setLoginState({ loading: true, user: null })
      return firebaseApp.auth()
        .signInWithEmailAndPassword("default@user.com", "pass123")
        .then(() => history.push("/protected"))
    },
    [firebaseApp, setLoginState, history]
  )

  return (<div>
    <h1>Login Page</h1>
    <button onClick={loginHandler}>Please log in</button>
  </div>)
}
