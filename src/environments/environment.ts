import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'FIREBASE_API_KEY_PLACEHOLDER',
  authDomain: 'angular-apps-87b70.firebaseapp.com',
  projectId: 'angular-apps-87b70',
  storageBucket: 'angular-apps-87b70.firebasestorage.app',
  messagingSenderId: '729379065638',
  appId: 'FIREBASE_APP_ID_PLACEHOLDER',
  measurementId: 'FIREBASE_MEASUREMENT_ID_PLACEHOLDER',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const ip2locationConfig = {
  endpoint: 'https://ip-2-location.gennarodifiandra.workers.dev/',
  apiKey: '',
};

export const environment = {
  production: true,
  firebaseConfig: firebaseConfig,
  firebaseApp: app,
  firebaseAnalytics: analytics,
  ip2locationConfig: ip2locationConfig,
};
