importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "TU_API_KEY",
  databaseURL: "https://cdna-truper-default-rtdb.firebaseio.com/",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(p => {
  self.registration.showNotification(
    p.notification?.title || 'TRUPER CDNA+',
    { body: p.notification?.body || 'Nueva notificación', icon:'/icon-192.png', badge:'/badge.png' }
  );
});