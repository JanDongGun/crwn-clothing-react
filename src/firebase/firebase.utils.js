import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOtsfdvhrpE-lpBfpUaTBffFc1W1FMI28",
  authDomain: "modernjavascript-ad4a6.firebaseapp.com",
  projectId: "modernjavascript-ad4a6",
  storageBucket: "modernjavascript-ad4a6.appspot.com",
  messagingSenderId: "261218281560",
  appId: "1:261218281560:web:5f4de9f990243632cc822d",
  measurementId: "G-VE8WM770S0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
