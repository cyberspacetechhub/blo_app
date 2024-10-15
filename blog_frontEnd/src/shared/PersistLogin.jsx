import {React, useEffect, useState} from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const refresh = useRefreshToken();
  const {auth, persist} = useAuth();

  useEffect(() => {
    // let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.token && !persist ? verifyRefreshToken() : setIsLoading(false);

    // return () => isMounted = false;
  }, [])

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`auth.accessToken: ${auth?.token}`);
    console.log(auth)
  }, [isLoading, auth])
  return (
    <div>
      {isLoading ? <p>Loading...</p> : <Outlet />}
    </div>
  )
}

export default PersistLogin
