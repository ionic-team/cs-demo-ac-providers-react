import { isPlatform } from '@ionic/react';
import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const AzureOptions = (): IonicAuthOptions => {
  let options: IonicAuthOptions = {
    authConfig: 'azure',
    clientID: process.env.REACT_APP_AZURE_CLIENT_ID!,
    redirectUri: isPlatform('capacitor') ? process.env.REACT_APP_AZURE_REDIRECT_URI! : 'http://localhost:8100/login',
    discoveryUrl: process.env.REACT_APP_AZURE_DISCOVERY_URL!,
    scope: process.env.REACT_APP_AZURE_SCOPE!,
    audience: process.env.REACT_APP_AZURE_AUDIENCE!,
    logoutUrl: isPlatform('capacitor') ? process.env.REACT_APP_AZURE_LOGOUT_URL! : 'http://localhost:8100/login',
    platform: isPlatform('capacitor') ? 'capacitor' : 'web',
    iosWebView: 'private',
    logLevel: "DEBUG",
  };

  return options;
};