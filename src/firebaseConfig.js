import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAmOZpYARudANvbI0LUYyt4iXCMm78LNw",
    authDomain: "blogsite-117ea.firebaseapp.com",
    projectId: "blogsite-117ea",
    storageBucket: "blogsite-117ea.appspot.com",
    messagingSenderId: "506144044887",
    appId: "1:506144044887:web:7c7cbcee0d33e704f9f012",
    measurementId: "G-NY8WM4SSB0"
  }

  // const firebase = require("firebase");
  // Required for side-effects
  require("firebase/firestore");
  var fb =firebase.initializeApp(firebaseConfig)
  var db = firebase.firestore();

export{
  db,fb
}