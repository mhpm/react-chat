import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import AuthContext from "../context/auth/authContext"

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname:
                process.env.NODE_ENV === "production" ? "/react-chat/" : "/",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
