import { useState, useEffect } from 'react';
import { IonicAuth } from '@ionic-enterprise/auth';

import { AzureOptions } from '../constants';

const azureAuth = new IonicAuth(AzureOptions);

export const useAzureAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const authenticationStatus = await azureAuth.isAuthenticated();
      setIsAuthenticated(authenticationStatus);
    };
    init();
  }, []);

  const login = async (): Promise<void> => {
    try {
      await azureAuth.login();
      setIsAuthenticated(true);
    } catch (error) {
      console.log('Error logging in to Azure', error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await azureAuth.logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('Error logging out from Azure', error);
    }
  };

  const refresh = async (): Promise<void> => {
    const authenticationStatus = await azureAuth.isAuthenticated();
    setIsAuthenticated(authenticationStatus);
  };

  return { isAuthenticated, login, logout, refresh };
};
