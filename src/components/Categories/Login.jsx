import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
      return <div>Loading ...</div>;
    }
  
  return (
    <section>
          {isAuthenticated && (
      <div>
        <p className="md:mr-0  mr-5 hover:text-gray-900">{user.name}</p>
      </div>
    )}
          {isAuthenticated ? (
            <li className="md:mr-0  mr-5 hover:text-gray-900"> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
          </li>

          ):(
            <li className="md:mr-0  mr-5 hover:text-gray-900"> <button onClick={() => loginWithRedirect()}>Log In</button></li>
          )}
    </section>
  )
}

export default Login
