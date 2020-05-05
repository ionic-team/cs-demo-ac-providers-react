import { isPlatform } from '@ionic/react';
import { IonicAuthOptions } from '@ionic-enterprise/auth';

export const AzureOptions: IonicAuthOptions = {
  authConfig: 'azure',
  clientID: process.env.REACT_APP_AZURE_CLIENT_ID!,
  redirectUri: isPlatform('capacitor')
    ? process.env.REACT_APP_AZURE_REDIRECT_URI!
    : process.env.REACT_APP_WEBHOST! + 'login',
  discoveryUrl: process.env.REACT_APP_AZURE_DISCOVERY_URL!,
  scope: process.env.REACT_APP_AZURE_SCOPE!,
  audience: process.env.REACT_APP_AZURE_AUDIENCE!,
  logoutUrl: isPlatform('capacitor')
    ? process.env.REACT_APP_AZURE_LOGOUT_URL!
    : process.env.REACT_APP_WEBHOST! + 'login',
  platform: isPlatform('capacitor') ? 'capacitor' : 'web',
  iosWebView: 'private',
  logLevel: 'DEBUG'
};
