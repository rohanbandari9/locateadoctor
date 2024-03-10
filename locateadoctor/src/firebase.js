import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDLXpGXXFvPXRzsOhHxx0M8P3QTvdt3JE0",
  authDomain: "healthcare-3ceec.firebaseapp.com",
  databaseURL: "https://healthcare-3ceec-default-rtdb.firebaseio.com",
  projectId: "healthcare-3ceec",
  storageBucket: "healthcare-3ceec.appspot.com",
  messagingSenderId: "443866244431",
  appId: "1:443866244431:web:a1564bde30bda03c57913a",
  measurementId: "G-M9HXYJZSGG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();