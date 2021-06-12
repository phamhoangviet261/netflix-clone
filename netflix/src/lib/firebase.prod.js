import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBhqSn0sjusa-rcM3HFiSn4pfGdh4QkjZE",
    authDomain: "netflix-1-ddf8c.firebaseapp.com",
    projectId: "netflix-1-ddf8c",
    storageBucket: "netflix-1-ddf8c.appspot.com",
    messagingSenderId: "651917972464",
    appId: "1:651917972464:web:db0497aad4d2f9eb4d4335"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
