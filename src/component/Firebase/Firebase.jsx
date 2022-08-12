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

const Firebase = () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

    //inscription
    const signupUser = (email, password) =>
        auth.createUserWithEmailAndPassword(email, password)


    //Connexion 
    const loginUser = (email, password) =>
        auth.singInWithEmailAndPassword(email, password)

    //Deconexion
    const signoutUser = () => auth.signOut()
}

export default Firebase