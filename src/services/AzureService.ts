import { isPlatform } from '@ionic/react';
import { IonicAuth, IonicAuthOptions } from '@ionic-enterprise/auth';

const options: IonicAuthOptions = {
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
  logLevel: 'DEBUG',
};

export class AzureService extends IonicAuth {
  //#region Implementing the Singleton Pattern

  private static instance: AzureService | undefined;

  private constructor(options: IonicAuthOptions) {
    super(options);
  }

  public static getInstance(): AzureService {
    if (!AzureService.instance) {
      AzureService.instance = new AzureService(options);
    }
    return AzureService.instance;
  }

  //#endregion

  //#region Example `IonicAuth` Event Handler Overrides

  async onLoginSuccess(): Promise<void> {
    console.log('Azure: Successfully logged in.');
  }

  async onLogout(): Promise<void> {
    console.log('Azure: Successfully logged out.');
  }

  //#endregion
}
