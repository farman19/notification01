importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts( "https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");


const firebaseConfig = {
    apiKey: "AIzaSyDXPWXDzhUIizJXbJqmD1unfrlWZzEnmSs",
    authDomain: "push-notification02-d217e.firebaseapp.com",
    projectId: "push-notification02-d217e",
    storageBucket: "push-notification02-d217e.firebasestorage.app",
    messagingSenderId: "670515617751",
    appId: "1:670515617751:web:80aa94512ae2a163beb592",
    measurementId: "G-KE6LQSJFQG"
  };

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function (payload){
    console.log('Received background message', payload);
  });