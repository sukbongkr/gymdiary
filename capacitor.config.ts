import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gymdiary.app',
  appName: 'gymdiary',
  webDir: 'build',
  server: {
    //androidScheme: 'https',
    url: 'https://localhost:5173',
    cleartext: true,
  }
};

export default config;
