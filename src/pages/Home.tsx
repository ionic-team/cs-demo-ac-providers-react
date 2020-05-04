import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { faMicrosoft, faAmazon } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { useAzureAuth, useCognitoAuth, useAuth0Auth } from '../hooks';
import AuthProvider, { AuthProviderProps } from '../components/AuthProvider';

import './Home.css';

const Home: React.FC = () => {

  const providers: AuthProviderProps[] = [{
    name: 'Auth0',
    color: 'danger',
    icon: faStar,
    hook: useAuth0Auth()
  }, {
    name: 'Azure B2C',
    color: 'tertiary',
    icon: faMicrosoft,
    hook: useAzureAuth()
  }, {
    name: 'Cognito',
    color: 'warning',
    icon: faAmazon,
    hook: useCognitoAuth()
  }];

  return (
    <IonPage>
      <IonContent>
        <div className="container">
          <div className="container__inner">
            {providers.map((provider, index) =>
              <AuthProvider provider={provider} key={index} />
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
