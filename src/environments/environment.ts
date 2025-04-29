// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_QIXBs_9qLhs_VU5d_X7m06GRaXo7TRs",
  authDomain: "clash-of-smashpass.firebaseapp.com",
  projectId: "clash-of-smashpass",
  storageBucket: "clash-of-smashpass.firebasestorage.app",
  messagingSenderId: "729483656432",
  appId: "1:729483656432:web:5cf7d5ea28febbecb95635",
  measurementId: "G-RZ9N2S01RJ"
};

export const environment = {
  production: false, // Cambia a true solo en el archivo de producción
  firebaseConfig: {
    apiKey: "AIzaSyB_QIXBs_9qLhs_VU5d_X7m06GRaXo7TRs",
    authDomain: "clash-of-smashpass.firebaseapp.com",
    projectId: "clash-of-smashpass",
    storageBucket: "clash-of-smashpass.firebasestorage.app",
    messagingSenderId: "729483656432",
    appId: "1:729483656432:web:5cf7d5ea28febbecb95635",
    measurementId: "G-RZ9N2S01RJ"
  }
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
