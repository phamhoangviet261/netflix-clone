import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyA-IkbtOlFtfH2XXeQQSsDeEisiJtrtRkM",
  authDomain: "netflix-851a4.firebaseapp.com",
  projectId: "netflix-851a4",
  storageBucket: "netflix-851a4.appspot.com",
  messagingSenderId: "207128207213",
  appId: "1:207128207213:web:fba48092161920ecff4464",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
