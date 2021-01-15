import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA4kTUJGIkJ5M5B-EyVu_yVq03VIrs0g2I",
  authDomain: "web-timers.firebaseapp.com",
  projectId: "web-timers",
  storageBucket: "web-timers.appspot.com",
  messagingSenderId: "45919091808",
  appId: "1:45919091808:web:1e353ed8a8234f5548d705"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
