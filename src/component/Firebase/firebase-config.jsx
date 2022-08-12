import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAzFJ8wFTL9Eb3FVdzqkupY9T0wkYzNhyg",
  authDomain: "marvel-quiz-7b3a7.firebaseapp.com",
  projectId: "marvel-quiz-7b3a7",
  storageBucket: "marvel-quiz-7b3a7.appspot.com",
  messagingSenderId: "91195614351",
  appId: "1:91195614351:web:951fd1414826b0c84bfcfa"
};

//Initialize firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app