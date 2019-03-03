import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyALx-Yckr6ar-GK8slZC-Q4lF2JLAhSpxo",
  authDomain: "first-react-app-dc2c2.firebaseapp.com",
  databaseURL: "https://first-react-app-dc2c2.firebaseio.com/",
  projectId: "first-react-app-dc2c2",
  storageBucket: "gs://first-react-app-dc2c2.appspot.com",
  messagingSenderId: "<messageingSenderId>"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;