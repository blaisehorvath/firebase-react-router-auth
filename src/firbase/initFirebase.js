import firebase from "firebase"

export function initFirebase() {
  return firebase.initializeApp(
    {
      apiKey: "AIzaSyA7FNKTxpVIYgv11C_ukozMn_wPB_dCnZY",
      authDomain: "fir-login-cdea0.firebaseapp.com",
      databaseURL: "https://fir-login-cdea0.firebaseio.com",
      projectId: "fir-login-cdea0",
      storageBucket: "fir-login-cdea0.appspot.com",
      messagingSenderId: "553923513546",
      appId: "1:553923513546:web:0fa5a7cd1b0d1fe7c27833",
      measurementId: "G-C6M6G1M53Q"
    }
  )
}
