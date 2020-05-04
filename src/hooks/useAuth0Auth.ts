import { useState, useEffect } from 'react';
import { IonicAuth } from '@ionic-enterprise/auth';

import { Auth0Options } from '../constants';

const auth0Auth = new IonicAuth(Auth0Options());

export const useAuth0Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const authenticationStatus = await auth0Auth.isAuthenticated();
      setIsAuthenticated(authenticationStatus);
    };
    init();
  }, []);

  const login = async (): Promise<void> => {
    try {
      await auth0Auth.login();
      setIsAuthenticated(true);

    } catch (error) {
      console.log('Error logging in to Auth0', error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await auth0Auth.logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('Error logging out from Auth0', error);
    }
  };

  const refresh = async (): Promise<void> => {
    const authenticationStatus = await auth0Auth.isAuthenticated();
    setIsAuthenticated(authenticationStatus);
  };

  return { isAuthenticated, login, logout, refresh };

};