import { isPlatform } from '@ionic/react';
import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const Auth0Options = (): IonicAuthOptions => {
  let options: IonicAuthOptions = {
    authConfig: 'auth0',
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID!,
    discoveryUrl: process.env.REACT_APP_AUTH0_DISCOVERY_URL!,
    scope: process.env.REACT_APP_AUTH0_SCOPE!,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE!,
    redirectUri: (isPlatform('capacitor')
      ? process.env.REACT_APP_APPHOST
      : process.env.REACT_APP_WEBHOST
    ) + 'login',
    logoutUrl: (isPlatform('capacitor')
      ? process.env.REACT_APP_APPHOST
      : process.env.REACT_APP_WEBHOST
    ) + 'login',
    platform: isPlatform('capacitor') ? 'capacitor' : 'web',
    iosWebView: 'private',
    logLevel: "DEBUG",
  };

  return options;
};