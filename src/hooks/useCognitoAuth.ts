import { useState, useEffect } from 'react';
import { IonicAuth } from '@ionic-enterprise/auth';

import { CognitoOptions } from '../constants';

const cognitoAuth = new IonicAuth(CognitoOptions());

export const useCognitoAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const authenticationStatus = await cognitoAuth.isAuthenticated();
      setIsAuthenticated(authenticationStatus);
    };
    init();
  }, []);

  const login = async (): Promise<void> => {
    try {
      await cognitoAuth.login();
      setIsAuthenticated(true);
    } catch (error) {
      console.log('Error logging in to AWS Cognito', error);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await cognitoAuth.logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.log('Error logging out from AWS Cognito', error);
    }
  };

  const refresh = async (): Promise<void> => {
    const authenticationStatus = await cognitoAuth.isAuthenticated();
    setIsAuthenticated(authenticationStatus);
  };

  return { isAuthenticated, login, logout, refresh };
};
