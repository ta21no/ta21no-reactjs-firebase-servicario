

import firebase from "firebase/app";
import 'firebase/firestore'

const db = firebase
  .initializeApp(
    {
      apiKey: "AIzaSyCYkTg-cp_zVcrhnhB7sXaxP06fTgUBUkg",
      authDomain: "servisario.firebaseapp.com",
      databaseURL: "https://servisario.firebaseio.com",
      projectId: "servisario",
      storageBucket: "servisario.appspot.com",
      messagingSenderId: "268184119636",
      appId: "1:268184119636:web:3b83dd2440c1c5f98dc0c1",
      measurementId: "G-FFTLPE3EBT"
    }
  )
  .firestore()

export default db

const  { Timestamp } = firebase.firestore
export { Timestamp }