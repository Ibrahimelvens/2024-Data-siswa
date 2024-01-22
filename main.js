 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyBMsyXvwgPaH5_4bZC_FgBXVB0IWSGiTHM",
  authDomain: "elvens-549b6.firebaseapp.com",
  projectId: "elvens-549b6",
  storageBucket: "elvens-549b6.appspot.com",
  messagingSenderId: "1030777173803",
  appId: "1:1030777173803:web:60e221608478e961b9f76e",
  measurementId: "G-E96B73PT47"
};
const app = initializeApp(firebaseConfig);

