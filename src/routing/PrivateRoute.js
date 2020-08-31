import React, { useContext } from "react"

import {
  Route,
  Redirect,
} from "react-router-dom";
import { LoginContext } from "../login/loginContext"

export default function PrivateRoute( { children, ...rest } ) {
  const { loginState } = useContext(LoginContext)

  // or loading bar
  if ( loginState.isLoading ) return null

  return (
    <Route
      {...rest}
      render={( { location } ) =>
        loginState.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
