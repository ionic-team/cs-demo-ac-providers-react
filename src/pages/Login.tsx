import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { faMicrosoft, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Auth0Service, AzureService, CognitoService } from '../services';
import { useAuthConnect } from '../hooks/useAuthConnect';
import AuthProvider, { AuthProviderProps } from '../components/AuthProvider';

import './Login.css';

const Login: React.FC = () => {
  const providers: AuthProviderProps[] = [
    {
      name: 'Auth0',
      color: 'danger',
      icon: faStar,
      hook: useAuthConnect(Auth0Service.getInstance()),
    },
    {
      name: 'Azure B2C',
      color: 'tertiary',
      icon: faMicrosoft,
      hook: useAuthConnect(AzureService.getInstance()),
    },
    {
      name: 'Cognito',
      color: 'warning',
      icon: faAmazon,
      hook: useAuthConnect(CognitoService.getInstance()),
    },
  ];

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="container__inner">
            {providers.map((provider, index) => (
              <AuthProvider provider={provider} key={index} />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
