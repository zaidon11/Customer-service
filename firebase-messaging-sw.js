importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// ضع بيانات Firebase الخاصة بمشروعك هنا
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6nz1_dENnayngLi1iiq8KDOKQmbfwNDI",
  authDomain: "rashedshopv1.firebaseapp.com",
  databaseURL: "https://rashedshopv1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rashedshopv1",
  storageBucket: "rashedshopv1.firebasestorage.app",
  messagingSenderId: "946603870783",
  appId: "1:946603870783:web:59aaa8549fab98635fc68a",
  measurementId: "G-CKF2TS086Q"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || "مركز الراشد للاتصالات";
  const notificationOptions = {
    body: payload.notification.body || "",
    icon: payload.notification.icon || "https://cdn-icons-png.flaticon.com/512/597/597177.png",
    vibrate: [200, 100, 200],
    data: {
      url: payload.notification.click_action || self.location.origin
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
