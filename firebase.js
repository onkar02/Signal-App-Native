import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNUsD36por5-XgcGBK6cusKK3uJZiXFI8",
  authDomain: "signal-app-4159f.firebaseapp.com",
  projectId: "signal-app-4159f",
  storageBucket: "signal-app-4159f.appspot.com",
  messagingSenderId: "691456343195",
  appId: "1:691456343195:web:cdf47b9a865ae243e39a3e",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
